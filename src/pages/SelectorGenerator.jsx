import { useState, useEffect } from 'react';
import useGemini from '../hooks/useGemini';
import OutputBox from '../components/OutputBox';

const SelectorGenerator = () => {
  // AI Selector State
  const [description, setDescription] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [aiCssSelector, setAiCssSelector] = useState('');
  const [aiXpathSelector, setAiXpathSelector] = useState('');
  const { data, error, isLoading, callApi } = useGemini();

  // Manual Selector State
  const [tag, setTag] = useState('');
  const [id, setId] = useState('');
  const [className, setClassName] = useState('');
  const [attribute, setAttribute] = useState('');
  const [attrValue, setAttrValue] = useState('');
  const [cssSelector, setCssSelector] = useState('');
  const [xpathSelector, setXpathSelector] = useState('');

  // Generate AI selectors
  const handleAiGenerate = async () => {
    if (!description.trim()) {
      alert('Please enter an element description');
      return;
    }
    
    if (!apiKey.trim()) {
      alert('Please enter your Gemini API key');
      return;
    }

    const prompt = `Given this description of a web element, provide ONLY two lines as output:
1. A CSS selector
2. An XPath selector

Element description: ${description}

Format your response EXACTLY as:
CSS: [selector]
XPath: [selector]`;

    try {
      const result = await callApi(prompt, apiKey);
      
      // Parse the response
      const lines = result.split('\n').filter(line => line.trim());
      const cssLine = lines.find(line => line.toLowerCase().includes('css:'));
      const xpathLine = lines.find(line => line.toLowerCase().includes('xpath:'));
      
      if (cssLine) {
        setAiCssSelector(cssLine.split(':').slice(1).join(':').trim());
      }
      if (xpathLine) {
        setAiXpathSelector(xpathLine.split(':').slice(1).join(':').trim());
      }
    } catch (err) {
      console.error('Error generating selectors:', err);
    }
  };

  // Generate manual selectors
  useEffect(() => {
    let css = '';
    let xpath = '';

    if (tag) {
      css = tag;
      xpath = `//${tag}`;
    }

    if (id) {
      css = `#${id}`;
      xpath = `//*[@id="${id}"]`;
    }

    if (className) {
      const classes = className.split(' ').filter(c => c.trim());
      if (tag) {
        css = `${tag}.${classes.join('.')}`;
      } else {
        css = `.${classes.join('.')}`;
      }
      
      if (classes.length === 1) {
        xpath = `//*[contains(@class, "${classes[0]}")]`;
      } else {
        const classConditions = classes.map(c => `contains(@class, "${c}")`).join(' and ');
        xpath = `//*[${classConditions}]`;
      }
    }

    if (attribute && attrValue) {
      if (tag) {
        css = `${tag}[${attribute}="${attrValue}"]`;
        xpath = `//${tag}[@${attribute}="${attrValue}"]`;
      } else {
        css = `[${attribute}="${attrValue}"]`;
        xpath = `//*[@${attribute}="${attrValue}"]`;
      }
    } else if (attribute) {
      if (tag) {
        css = `${tag}[${attribute}]`;
        xpath = `//${tag}[@${attribute}]`;
      } else {
        css = `[${attribute}]`;
        xpath = `//*[@${attribute}]`;
      }
    }

    // Combine selectors if multiple inputs
    if (tag && className && !id && !attribute) {
      const classes = className.split(' ').filter(c => c.trim());
      css = `${tag}.${classes.join('.')}`;
      const classConditions = classes.map(c => `contains(@class, "${c}")`).join(' and ');
      xpath = `//${tag}[${classConditions}]`;
    }

    setCssSelector(css);
    setXpathSelector(xpath);
  }, [tag, id, className, attribute, attrValue]);

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Selector Generator</h1>
        <p className="text-gray-400">
          Generate CSS and XPath selectors using AI or build them manually
        </p>
      </div>

      <div className="space-y-8">
        {/* AI Selector Generator */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            🤖 AI Selector Suggestions
          </h2>

          <div className="space-y-4">
            {/* API Key Input */}
            <div>
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
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Element Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="E.g., 'The submit button with blue background' or 'Username input field in login form'"
                rows={3}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              onClick={handleAiGenerate}
              disabled={isLoading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Generating...' : 'Generate AI Selectors'}
            </button>

            {/* Error Display */}
            {error && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-4">
                <p className="text-red-200">
                  <strong>Error:</strong> {error}
                </p>
              </div>
            )}

            {/* AI Results */}
            {(aiCssSelector || aiXpathSelector) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <OutputBox title="CSS Selector" content={aiCssSelector} />
                <OutputBox title="XPath Selector" content={aiXpathSelector} />
              </div>
            )}
          </div>
        </div>

        {/* Manual Selector Builder */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            🛠️ Manual Selector Builder
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tag Name
              </label>
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="e.g., input, button, div"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ID
              </label>
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="e.g., username"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Class Name(s)
              </label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="e.g., btn btn-primary"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Attribute Name
              </label>
              <input
                type="text"
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
                placeholder="e.g., type, name, data-testid"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Attribute Value
              </label>
              <input
                type="text"
                value={attrValue}
                onChange={(e) => setAttrValue(e.target.value)}
                placeholder="e.g., submit, username-field"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Manual Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OutputBox
              title="CSS Selector"
              content={cssSelector}
              placeholder="CSS selector will appear here..."
            />
            <OutputBox
              title="XPath Selector"
              content={xpathSelector}
              placeholder="XPath selector will appear here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectorGenerator;