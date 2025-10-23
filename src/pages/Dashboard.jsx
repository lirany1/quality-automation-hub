import ToolCard from '../components/ToolCard';

const Dashboard = () => {
  const tools = [
    {
      title: 'AI Test Case Generator',
      description: 'Generate comprehensive test cases using AI based on your feature descriptions.',
      icon: '🧪',
      path: '/test-cases',
      features: [
        'AI-powered generation',
        'Comprehensive scenarios',
        'Edge case coverage',
      ],
    },
    {
      title: 'Test Data Generator',
      description: 'Create various types of test data including names, emails, phone numbers, and more.',
      icon: '📊',
      path: '/test-data',
      features: [
        'Multiple data types',
        'Random generation',
        'Customizable format',
      ],
    },
    {
      title: 'Selector Generator',
      description: 'Generate CSS and XPath selectors with AI suggestions or manual construction.',
      icon: '🎯',
      path: '/selectors',
      features: [
        'AI suggestions',
        'Manual builder',
        'Real-time preview',
      ],
    },
    {
      title: 'Code Snippet Generator',
      description: 'Generate automation code snippets for popular frameworks like Selenium and Playwright.',
      icon: '💻',
      path: '/code-snippets',
      features: [
        'Multiple frameworks',
        'Common actions',
        'Copy-ready code',
      ],
    },
    {
      title: 'String Utilities',
      description: 'Encode, decode, and transform strings with Base64, URL encoding, and more.',
      icon: '🔤',
      path: '/string-utils',
      features: [
        'Base64 encoding',
        'URL encoding/decoding',
        'Case transformation',
      ],
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to The Quality Automation Hub
        </h1>
        <p className="text-gray-400">
          Your one-stop toolkit for quality assurance and test automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.path} {...tool} />
        ))}
      </div>

      <div className="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-semibold text-white mb-4">Getting Started</h2>
        <div className="space-y-3 text-gray-400">
          <p>
            <strong className="text-white">AI Features:</strong> Some tools use the Gemini API. 
            You'll need to provide your API key when using AI-powered features.
          </p>
          <p>
            <strong className="text-white">Local Tools:</strong> Test Data Generator, String Utilities, 
            and Manual Selector Generator work entirely in your browser without API calls.
          </p>
          <p>
            <strong className="text-white">Navigate:</strong> Use the sidebar on the left to switch 
            between different tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;