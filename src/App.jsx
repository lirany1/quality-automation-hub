import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import AiTestCaseGenerator from './pages/AiTestCaseGenerator';
import TestDataGenerator from './pages/TestDataGenerator';
import SelectorGenerator from './pages/SelectorGenerator';
import CodeSnippetGenerator from './pages/CodeSnippetGenerator';
import StringUtilities from './pages/StringUtilities';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-200">
        <Sidebar />
        <main className="ml-64 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/test-cases" element={<AiTestCaseGenerator />} />
            <Route path="/test-data" element={<TestDataGenerator />} />
            <Route path="/selectors" element={<SelectorGenerator />} />
            <Route path="/code-snippets" element={<CodeSnippetGenerator />} />
            <Route path="/string-utils" element={<StringUtilities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
