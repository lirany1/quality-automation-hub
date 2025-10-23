import CopyButton from './CopyButton';

const OutputBox = ({ title, content, placeholder = 'Output will appear here...', isLoading = false }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {content && <CopyButton textToCopy={content} />}
      </div>
      
      <div className="bg-gray-900 rounded-md p-4 min-h-[200px] relative">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span className="ml-2 text-gray-400">Generating...</span>
          </div>
        ) : content ? (
          <pre className="text-gray-200 whitespace-pre-wrap text-sm font-mono">{content}</pre>
        ) : (
          <div className="text-gray-500 italic">{placeholder}</div>
        )}
      </div>
    </div>
  );
};

export default OutputBox;