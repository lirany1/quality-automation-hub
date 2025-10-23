import { useState } from 'react';

const useGemini = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callApi = async (prompt, apiKey, maxRetries = 3) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    let retries = 0;
    let delay = 1000; // Start with 1 second

    while (retries < maxRetries) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: prompt,
                    },
                  ],
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          
          // Check if it's a rate limit error (429) or server error (5xx)
          if (response.status === 429 || response.status >= 500) {
            retries++;
            if (retries < maxRetries) {
              // Exponential backoff
              await new Promise((resolve) => setTimeout(resolve, delay));
              delay *= 2; // Double the delay for next retry
              continue;
            }
          }
          
          throw new Error(errorData.error?.message || `API error: ${response.status}`);
        }

        const result = await response.json();
        const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
        
        setData(generatedText);
        setIsLoading(false);
        return generatedText;
      } catch (err) {
        if (retries >= maxRetries - 1) {
          setError(err.message || 'Failed to generate content');
          setIsLoading(false);
          throw err;
        }
        
        retries++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  return { data, error, isLoading, callApi };
};

export default useGemini;