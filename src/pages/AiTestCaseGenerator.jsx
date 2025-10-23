import { useState } from 'react';
import useGemini from '../hooks/useGemini';
import OutputBox from '../components/OutputBox';

const AiTestCaseGenerator = () => {
  const [featureDescription, setFeatureDescription] = useState('');
  const [apiKey, setApiKey] = useState('');
  const { data, error, isLoading, callApi } = useGemini();

  const handleGenerate = async () => {
    if (!featureDescription.trim()) {
      alert('Please enter a feature description');
      return;
    }
    
    if (!apiKey.trim()) {
      alert('Please enter your Gemini API key');
      return;
    }

    const prompt = `Generate comprehensive test cases for the following feature. Include positive tests, negative tests, edge cases, and boundary tests. Format the output clearly with test case numbers, descriptions, steps, and expected results.

Feature Description:
${featureDescription}`;

    try {
      await callApi(prompt, apiKey);
    } catch (err) {
      console.error('Error generating test cases:', err);
    }
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">AI Test Case Generator</h1>
        <p className="text-gray-400">
          Generate comprehensive test cases using AI based on your feature descriptions
        </p>
      </div>

      <div className="space-y-6">
        {/* API Key Input */}
        <div className="bg-gray-800 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Gemini API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Gemini API key"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Get your API key from{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Google AI Studio
            </a>
          </p>
        </div>

        {/* Feature Description Input */}
        <div className="bg-gray-800 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Feature Description
          </label>
          <textarea
            value={featureDescription}
            onChange={(e) => setFeatureDescription(e.target.value)}
            placeholder="Describe the feature you want to test. Be as detailed as possible..."
            rows={8}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
        >
          {isLoading ? 'Generating...' : 'Generate Test Cases'}
        </button>

        {/* Error Display */}
        {error && (
          <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
            <p className="text-red-200">
              <strong>Error:</strong> {error}
            </p>
          </div>
        )}

        {/* Output */}
        <OutputBox
          title="Generated Test Cases"
          content={data}
          isLoading={isLoading}
          placeholder="Test cases will appear here after generation..."
        />
      </div>
    </div>
  );
};

export default AiTestCaseGenerator;