import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const tools = [
    { path: '/', name: 'Dashboard', icon: '🏠' },
    { path: '/test-cases', name: 'AI Test Cases', icon: '🧪' },
    { path: '/test-data', name: 'Test Data Gen', icon: '📊' },
    { path: '/selectors', name: 'Selector Gen', icon: '🎯' },
    { path: '/code-snippets', name: 'Code Snippets', icon: '💻' },
    { path: '/string-utils', name: 'String Utils', icon: '🔤' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white mb-2">The Quality Automation Hub</h1>
        <p className="text-gray-400 text-sm">Essential tools for QA engineers</p>
      </div>
      
      <nav className="space-y-2">
        {tools.map((tool) => (
          <NavLink
            key={tool.path}
            to={tool.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`
            }
          >
            <span className="text-lg">{tool.icon}</span>
            <span className="font-medium">{tool.name}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <a
          href="https://buymeacoffee.com/liran80v"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 mb-3"
        >
          <span>☕</span>
          <span>Buy me a coffee</span>
        </a>
        <div className="text-xs text-gray-500 text-center">
          Built with React & Tailwind
        </div>
      </div>
    </div>
  );
};

export default Sidebar;