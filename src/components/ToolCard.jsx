import { Link } from 'react-router-dom';

const ToolCard = ({ title, description, icon, path, features = [] }) => {
  return (
    <Link to={path} className="block">
      <div className="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors duration-200 border border-gray-700 hover:border-gray-600">
        <div className="flex items-center mb-4">
          <span className="text-3xl mr-3">{icon}</span>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        
        <p className="text-gray-400 mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-center">
                <span className="text-green-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-4 flex items-center text-blue-400 text-sm font-medium">
          Open Tool
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ToolCard;