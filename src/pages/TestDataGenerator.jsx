import { useState } from 'react';
import CopyButton from '../components/CopyButton';

const TestDataGenerator = () => {
  const [generatedData, setGeneratedData] = useState('');
  const [count, setCount] = useState(1);
  const [stringLength, setStringLength] = useState(10);

  // Helper functions for data generation
  const randomName = () => {
    const firstNames = [
      'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
      'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica',
      'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
    ];
    const lastNames = [
      'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
      'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
      'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
    ];
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
      lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  };

  const randomEmail = () => {
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'test.com', 'example.com'];
    const name = Math.random().toString(36).substring(2, 10);
    return `${name}@${domains[Math.floor(Math.random() * domains.length)]}`;
  };

  const randomPhone = () => {
    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;
    return `(${areaCode}) ${prefix}-${lineNumber}`;
  };

  const randomString = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  };

  const randomNumber = (min = 1, max = 1000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
  };

  const randomAddress = () => {
    const streetNumber = Math.floor(Math.random() * 9999) + 1;
    const streets = ['Main St', 'Oak Ave', 'Maple Rd', 'Cedar Ln', 'Pine Dr', 'Elm St', 'Washington Blvd'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'];
    const states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA'];
    const zipCode = Math.floor(Math.random() * 90000) + 10000;
    
    const streetIndex = Math.floor(Math.random() * streets.length);
    const cityIndex = Math.floor(Math.random() * cities.length);
    
    return `${streetNumber} ${streets[streetIndex]}, ${cities[cityIndex]}, ${states[cityIndex]} ${zipCode}`;
  };

  const randomPassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*';
    const all = upper + lower + numbers + special;
    
    let password = '';
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += special[Math.floor(Math.random() * special.length)];
    
    for (let i = 4; i < 12; i++) {
      password += all[Math.floor(Math.random() * all.length)];
    }
    
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  const generateData = (type) => {
    const results = [];
    const numItems = parseInt(count) || 1;

    for (let i = 0; i < numItems; i++) {
      switch (type) {
        case 'name':
          results.push(randomName());
          break;
        case 'email':
          results.push(randomEmail());
          break;
        case 'phone':
          results.push(randomPhone());
          break;
        case 'string':
          results.push(randomString(stringLength));
          break;
        case 'number':
          results.push(randomNumber().toString());
          break;
        case 'date':
          results.push(randomDate());
          break;
        case 'address':
          results.push(randomAddress());
          break;
        case 'password':
          results.push(randomPassword());
          break;
        default:
          results.push('Unknown type');
      }
    }

    setGeneratedData(results.join('\n'));
  };

  const dataTypes = [
    { type: 'name', label: 'Full Name', icon: '👤' },
    { type: 'email', label: 'Email Address', icon: '📧' },
    { type: 'phone', label: 'Phone Number', icon: '📱' },
    { type: 'string', label: 'Random String', icon: '🔤' },
    { type: 'number', label: 'Random Number', icon: '🔢' },
    { type: 'date', label: 'Random Date', icon: '📅' },
    { type: 'address', label: 'Address', icon: '🏠' },
    { type: 'password', label: 'Password', icon: '🔐' },
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Test Data Generator</h1>
        <p className="text-gray-400">
          Generate various types of test data for your testing needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Controls */}
        <div className="space-y-6">
          {/* Settings */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Items
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  String Length (for Random String)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={stringLength}
                  onChange={(e) => setStringLength(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Data Type Buttons */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Select Data Type</h3>
            
            <div className="grid grid-cols-2 gap-3">
              {dataTypes.map(({ type, label, icon }) => (
                <button
                  key={type}
                  onClick={() => generateData(type)}
                  className="flex items-center justify-center space-x-2 p-3 bg-gray-900 hover:bg-gray-700 border border-gray-700 rounded-md text-white transition-colors duration-200"
                >
                  <span>{icon}</span>
                  <span className="text-sm font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Output */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Generated Data</h3>
            {generatedData && <CopyButton textToCopy={generatedData} />}
          </div>
          
          <div className="bg-gray-900 rounded-md p-4 min-h-[500px]">
            {generatedData ? (
              <pre className="text-gray-200 whitespace-pre-wrap text-sm font-mono">
                {generatedData}
              </pre>
            ) : (
              <div className="text-gray-500 italic">
                Click a button to generate test data...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDataGenerator;