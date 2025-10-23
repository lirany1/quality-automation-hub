import { useState } from 'react';
import CopyButton from '../components/CopyButton';

const StringUtilities = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [activeUtility, setActiveUtility] = useState('');

  const utilities = [
    {
      id: 'base64-encode',
      name: 'Base64 Encode',
      icon: '🔐',
      action: (str) => {
        try {
          return btoa(str);
        } catch (e) {
          return 'Error: Invalid characters for Base64 encoding';
        }
      },
    },
    {
      id: 'base64-decode',
      name: 'Base64 Decode',
      icon: '🔓',
      action: (str) => {
        try {
          return atob(str);
        } catch (e) {
          return 'Error: Invalid Base64 string';
        }
      },
    },
    {
      id: 'url-encode',
      name: 'URL Encode',
      icon: '🌐',
      action: (str) => encodeURIComponent(str),
    },
    {
      id: 'url-decode',
      name: 'URL Decode',
      icon: '🔗',
      action: (str) => {
        try {
          return decodeURIComponent(str);
        } catch (e) {
          return 'Error: Invalid URL encoded string';
        }
      },
    },
    {
      id: 'uppercase',
      name: 'UPPERCASE',
      icon: '⬆️',
      action: (str) => str.toUpperCase(),
    },
    {
      id: 'lowercase',
      name: 'lowercase',
      icon: '⬇️',
      action: (str) => str.toLowerCase(),
    },
    {
      id: 'title-case',
      name: 'Title Case',
      icon: '✨',
      action: (str) =>
        str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    },
    {
      id: 'camel-case',
      name: 'camelCase',
      icon: '🐫',
      action: (str) =>
        str
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
          )
          .replace(/\s+/g, ''),
    },
    {
      id: 'snake-case',
      name: 'snake_case',
      icon: '🐍',
      action: (str) =>
        str
          .replace(/\s+/g, '_')
          .replace(/([A-Z])/g, '_$1')
          .toLowerCase()
          .replace(/^_/, ''),
    },
    {
      id: 'kebab-case',
      name: 'kebab-case',
      icon: '�串',
      action: (str) =>
        str
          .replace(/\s+/g, '-')
          .replace(/([A-Z])/g, '-$1')
          .toLowerCase()
          .replace(/^-/, ''),
    },
    {
      id: 'reverse',
      name: 'Reverse',
      icon: '🔄',
      action: (str) => str.split('').reverse().join(''),
    },
    {
      id: 'trim',
      name: 'Trim Whitespace',
      icon: '✂️',
      action: (str) => str.trim(),
    },
    {
      id: 'remove-spaces',
      name: 'Remove All Spaces',
      icon: '🚫',
      action: (str) => str.replace(/\s+/g, ''),
    },
    {
      id: 'count-chars',
      name: 'Count Characters',
      icon: '🔢',
      action: (str) => `Total: ${str.length}\nWithout spaces: ${str.replace(/\s+/g, '').length}\nWords: ${str.trim().split(/\s+/).filter(w => w).length}`,
    },
    {
      id: 'escape-html',
      name: 'Escape HTML',
      icon: '⚡',
      action: (str) =>
        str
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#039;'),
    },
    {
      id: 'unescape-html',
      name: 'Unescape HTML',
      icon: '🔓',
      action: (str) =>
        str
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"')
          .replace(/&#039;/g, "'"),
    },
  ];

  const handleUtilityClick = (utility) => {
    if (!input.trim()) {
      alert('Please enter some text first');
      return;
    }

    setActiveUtility(utility.id);
    const result = utility.action(input);
    setOutput(result);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
    setActiveUtility('');
  };

  const swapInputOutput = () => {
    const temp = input;
    setInput(output);
    setOutput(temp);
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">String Utilities</h1>
        <p className="text-gray-400">
          Encode, decode, and transform strings with various utilities
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Input/Output */}
        <div className="space-y-6">
          {/* Input */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">Input</h3>
              <div className="flex gap-2">
                <button
                  onClick={swapInputOutput}
                  disabled={!output}
                  className="px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 text-white rounded transition-colors duration-200"
                  title="Swap input and output"
                >
                  ⇄ Swap
                </button>
                <button
                  onClick={clearAll}
                  className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded transition-colors duration-200"
                >
                  Clear
                </button>
              </div>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to transform..."
              rows={10}
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-sm"
            />
          </div>

          {/* Output */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">Output</h3>
              {output && <CopyButton textToCopy={output} />}
            </div>
            <div className="bg-gray-900 rounded-md p-4 min-h-[240px]">
              {output ? (
                <pre className="text-gray-200 whitespace-pre-wrap text-sm font-mono">
                  {output}
                </pre>
              ) : (
                <div className="text-gray-500 italic">
                  Output will appear here...
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - Utilities */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Select Utility</h3>
          
          <div className="grid grid-cols-2 gap-2 max-h-[700px] overflow-y-auto pr-2">
            {utilities.map((utility) => (
              <button
                key={utility.id}
                onClick={() => handleUtilityClick(utility)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors duration-200 ${
                  activeUtility === utility.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-900 hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span className="text-2xl mb-2">{utility.icon}</span>
                <span className="text-xs text-center font-medium">{utility.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-900 rounded-md">
            <h4 className="text-sm font-semibold text-white mb-2">Tips:</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Enter text in the input box, then click a utility</li>
              <li>• Use the Swap button to move output back to input</li>
              <li>• Chain multiple transformations together</li>
              <li>• Copy the output using the Copy button</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringUtilities;