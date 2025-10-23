import { useState, useEffect } from 'react';
import CopyButton from '../components/CopyButton';

const CodeSnippetGenerator = () => {
  const [selector, setSelector] = useState('');
  const [action, setAction] = useState('click');
  const [text, setText] = useState('');
  const [framework, setFramework] = useState('selenium-python');
  const [codeSnippet, setCodeSnippet] = useState('');

  const frameworks = [
    { value: 'selenium-python', label: 'Selenium (Python)' },
    { value: 'selenium-java', label: 'Selenium (Java)' },
    { value: 'playwright-js', label: 'Playwright (JavaScript)' },
    { value: 'playwright-python', label: 'Playwright (Python)' },
    { value: 'cypress', label: 'Cypress' },
    { value: 'webdriverio', label: 'WebdriverIO' },
  ];

  const actions = [
    { value: 'click', label: 'Click', needsText: false },
    { value: 'type', label: 'Type Text', needsText: true },
    { value: 'clear', label: 'Clear', needsText: false },
    { value: 'getText', label: 'Get Text', needsText: false },
    { value: 'getAttribute', label: 'Get Attribute', needsText: true },
    { value: 'isVisible', label: 'Is Visible', needsText: false },
    { value: 'isEnabled', label: 'Is Enabled', needsText: false },
  ];

  const generateCode = () => {
    if (!selector) return '';

    const isCss = !selector.startsWith('//') && !selector.startsWith('(//');
    let code = '';

    switch (framework) {
      case 'selenium-python':
        code = generateSeleniumPython(selector, action, text, isCss);
        break;
      case 'selenium-java':
        code = generateSeleniumJava(selector, action, text, isCss);
        break;
      case 'playwright-js':
        code = generatePlaywrightJS(selector, action, text);
        break;
      case 'playwright-python':
        code = generatePlaywrightPython(selector, action, text);
        break;
      case 'cypress':
        code = generateCypress(selector, action, text);
        break;
      case 'webdriverio':
        code = generateWebdriverIO(selector, action, text, isCss);
        break;
      default:
        code = '';
    }

    return code;
  };

  const generateSeleniumPython = (sel, act, txt, isCss) => {
    const locator = isCss ? `By.CSS_SELECTOR, "${sel}"` : `By.XPATH, "${sel}"`;
    switch (act) {
      case 'click':
        return `element = driver.find_element(${locator})\nelement.click()`;
      case 'type':
        return `element = driver.find_element(${locator})\nelement.send_keys("${txt}")`;
      case 'clear':
        return `element = driver.find_element(${locator})\nelement.clear()`;
      case 'getText':
        return `element = driver.find_element(${locator})\ntext = element.text`;
      case 'getAttribute':
        return `element = driver.find_element(${locator})\nvalue = element.get_attribute("${txt}")`;
      case 'isVisible':
        return `element = driver.find_element(${locator})\nis_visible = element.is_displayed()`;
      case 'isEnabled':
        return `element = driver.find_element(${locator})\nis_enabled = element.is_enabled()`;
      default:
        return '';
    }
  };

  const generateSeleniumJava = (sel, act, txt, isCss) => {
    const locator = isCss ? `By.cssSelector("${sel}")` : `By.xpath("${sel}")`;
    switch (act) {
      case 'click':
        return `WebElement element = driver.findElement(${locator});\nelement.click();`;
      case 'type':
        return `WebElement element = driver.findElement(${locator});\nelement.sendKeys("${txt}");`;
      case 'clear':
        return `WebElement element = driver.findElement(${locator});\nelement.clear();`;
      case 'getText':
        return `WebElement element = driver.findElement(${locator});\nString text = element.getText();`;
      case 'getAttribute':
        return `WebElement element = driver.findElement(${locator});\nString value = element.getAttribute("${txt}");`;
      case 'isVisible':
        return `WebElement element = driver.findElement(${locator});\nboolean isVisible = element.isDisplayed();`;
      case 'isEnabled':
        return `WebElement element = driver.findElement(${locator});\nboolean isEnabled = element.isEnabled();`;
      default:
        return '';
    }
  };

  const generatePlaywrightJS = (sel, act, txt) => {
    switch (act) {
      case 'click':
        return `await page.locator('${sel}').click();`;
      case 'type':
        return `await page.locator('${sel}').fill('${txt}');`;
      case 'clear':
        return `await page.locator('${sel}').clear();`;
      case 'getText':
        return `const text = await page.locator('${sel}').textContent();`;
      case 'getAttribute':
        return `const value = await page.locator('${sel}').getAttribute('${txt}');`;
      case 'isVisible':
        return `const isVisible = await page.locator('${sel}').isVisible();`;
      case 'isEnabled':
        return `const isEnabled = await page.locator('${sel}').isEnabled();`;
      default:
        return '';
    }
  };

  const generatePlaywrightPython = (sel, act, txt) => {
    switch (act) {
      case 'click':
        return `page.locator("${sel}").click()`;
      case 'type':
        return `page.locator("${sel}").fill("${txt}")`;
      case 'clear':
        return `page.locator("${sel}").clear()`;
      case 'getText':
        return `text = page.locator("${sel}").text_content()`;
      case 'getAttribute':
        return `value = page.locator("${sel}").get_attribute("${txt}")`;
      case 'isVisible':
        return `is_visible = page.locator("${sel}").is_visible()`;
      case 'isEnabled':
        return `is_enabled = page.locator("${sel}").is_enabled()`;
      default:
        return '';
    }
  };

  const generateCypress = (sel, act, txt) => {
    switch (act) {
      case 'click':
        return `cy.get('${sel}').click();`;
      case 'type':
        return `cy.get('${sel}').type('${txt}');`;
      case 'clear':
        return `cy.get('${sel}').clear();`;
      case 'getText':
        return `cy.get('${sel}').invoke('text').then((text) => {\n  // Use text here\n});`;
      case 'getAttribute':
        return `cy.get('${sel}').invoke('attr', '${txt}').then((value) => {\n  // Use value here\n});`;
      case 'isVisible':
        return `cy.get('${sel}').should('be.visible');`;
      case 'isEnabled':
        return `cy.get('${sel}').should('be.enabled');`;
      default:
        return '';
    }
  };

  const generateWebdriverIO = (sel, act, txt, isCss) => {
    const locatorPrefix = isCss ? '$' : 'xpath:';
    const loc = isCss ? `$('${sel}')` : `$('${sel}')`;
    
    switch (act) {
      case 'click':
        return `await ${loc}.click();`;
      case 'type':
        return `await ${loc}.setValue('${txt}');`;
      case 'clear':
        return `await ${loc}.clearValue();`;
      case 'getText':
        return `const text = await ${loc}.getText();`;
      case 'getAttribute':
        return `const value = await ${loc}.getAttribute('${txt}');`;
      case 'isVisible':
        return `const isVisible = await ${loc}.isDisplayed();`;
      case 'isEnabled':
        return `const isEnabled = await ${loc}.isEnabled();`;
      default:
        return '';
    }
  };

  useEffect(() => {
    setCodeSnippet(generateCode());
  }, [selector, action, text, framework]);

  const selectedAction = actions.find(a => a.value === action);

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Code Snippet Generator</h1>
        <p className="text-gray-400">
          Generate automation code snippets for popular testing frameworks
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Inputs */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Configuration</h3>
            
            <div className="space-y-4">
              {/* Framework Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Framework
                </label>
                <select
                  value={framework}
                  onChange={(e) => setFramework(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {frameworks.map((fw) => (
                    <option key={fw.value} value={fw.value}>
                      {fw.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Action
                </label>
                <select
                  value={action}
                  onChange={(e) => setAction(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {actions.map((act) => (
                    <option key={act.value} value={act.value}>
                      {act.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selector Input */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Selector (CSS or XPath)
                </label>
                <input
                  type="text"
                  value={selector}
                  onChange={(e) => setSelector(e.target.value)}
                  placeholder="e.g., #username or //button[@id='submit']"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Conditional Text Input */}
              {selectedAction?.needsText && (
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {action === 'type' ? 'Text to Type' : 'Attribute Name'}
                  </label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder={action === 'type' ? 'Enter text...' : 'e.g., href, value'}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Quick Examples */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Examples</h3>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => {
                  setSelector('#username');
                  setAction('type');
                  setText('john.doe@example.com');
                }}
                className="w-full text-left p-2 bg-gray-900 hover:bg-gray-700 rounded text-gray-300 transition-colors"
              >
                Type in username field
              </button>
              <button
                onClick={() => {
                  setSelector('button[type="submit"]');
                  setAction('click');
                }}
                className="w-full text-left p-2 bg-gray-900 hover:bg-gray-700 rounded text-gray-300 transition-colors"
              >
                Click submit button
              </button>
              <button
                onClick={() => {
                  setSelector('//div[@class="message"]');
                  setAction('getText');
                }}
                className="w-full text-left p-2 bg-gray-900 hover:bg-gray-700 rounded text-gray-300 transition-colors"
              >
                Get message text (XPath)
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Code Preview */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Generated Code</h3>
            {codeSnippet && <CopyButton textToCopy={codeSnippet} />}
          </div>
          
          <div className="bg-gray-900 rounded-md p-4 min-h-[400px]">
            {codeSnippet ? (
              <pre className="text-gray-200 whitespace-pre-wrap text-sm font-mono">
                {codeSnippet}
              </pre>
            ) : (
              <div className="text-gray-500 italic">
                Enter a selector to generate code...
              </div>
            )}
          </div>

          {selector && (
            <div className="mt-4 p-3 bg-blue-900/30 border border-blue-700 rounded-md">
              <p className="text-sm text-blue-200">
                <strong>Tip:</strong> The code updates automatically as you change the inputs above.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeSnippetGenerator;