# The Quality Automation Hub 🛠️

> A comprehensive, modern React-based web application that provides essential tools for QA engineers and testers. Built with React, Tailwind CSS, and integrated with Google's Gemini AI for intelligent automation.

[![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

![Quality Automation Hub Banner](https://via.placeholder.com/1200x300/1f2937/60a5fa?text=Quality+Automation+Hub)

---

## 📑 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Development](#-development)
- [Building for Production](#-building-for-production)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🌟 Features

### 1. **AI Test Case Generator** 🧪
Leverage the power of Google's Gemini AI to automatically generate comprehensive test cases.

- Generate positive tests, negative tests, edge cases, and boundary tests
- Just describe your feature and let AI create detailed test scenarios
- Supports complex feature descriptions
- Instant results with copy-to-clipboard functionality

**Requires:** Gemini API key (free tier available)

---

### 2. **Test Data Generator** 📊
Generate realistic test data instantly with local JavaScript processing.

- **Full names** - Random realistic names
- **Email addresses** - Valid email formats
- **Phone numbers** - Formatted phone numbers
- **Random strings** - Customizable length
- **Random numbers** - Configurable ranges
- **Dates** - Random date generation
- **Physical addresses** - Complete addresses
- **Secure passwords** - Strong password generation

**Features:**
- Customizable output count (1-100 items)
- Adjustable string length for random text
- All generation happens locally in your browser (no API needed)
- Copy all generated data instantly

---

### 3. **Selector Generator** 🎯
Create CSS and XPath selectors with AI assistance or manual construction.

#### AI-Powered Mode
- Describe an element in natural language
- Get both CSS and XPath selectors instantly
- Perfect for complex element identification

#### Manual Builder Mode
- Construct selectors using:
  - Tag name
  - ID
  - Class name
  - Attributes (name, type, etc.)
- Real-time preview of both CSS and XPath
- Auto-updates as you type

**Perfect for:** Web automation, testing, scraping

---

### 4. **Code Snippet Generator** 💻
Generate ready-to-use automation code for popular testing frameworks.

**Supported Frameworks:**
- Selenium (Python)
- Selenium (Java)
- Playwright (JavaScript)
- Playwright (Python)
- Cypress
- WebdriverIO

**Supported Actions:**
- Click element
- Type text
- Clear field
- Get text content
- Get attribute value
- Check visibility
- Check enabled state

**Features:**
- Real-time code preview
- Dynamic input fields based on action
- Syntax-aware code generation
- Framework-specific best practices
- Quick example templates

---

### 5. **String Utilities** 🔤
Comprehensive string transformation toolkit with 16+ utilities.

**Encoding/Decoding:**
- Base64 encode/decode
- URL encode/decode
- HTML escape/unescape

**Case Transformations:**
- UPPERCASE
- lowercase
- Title Case
- camelCase
- snake_case
- kebab-case

**String Operations:**
- Reverse string
- Trim whitespace
- Remove all spaces
- Character count
- Word count

**Special Features:**
- Swap input/output to chain transformations
- All processing happens locally (privacy-friendly)
- Instant results

---

## 🚀 Quick Start

Get up and running in under 2 minutes:

```bash
# Clone the repository
git clone https://github.com/lirany1/quality-automation-hub.git

# Navigate to project directory
cd quality-automation-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:5173`

That's it! 🎉 The application is now running locally.

---

## 📦 Installation

### Prerequisites

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lirany1/quality-automation-hub.git
   cd quality-automation-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Navigate to the URL shown in your terminal (typically `http://localhost:5173`)

---

## 📖 Usage Guide

### Getting Started with Each Tool

#### 🧪 AI Test Case Generator
1. Navigate to "Test Cases" in the sidebar
2. Enter your [Gemini API key](https://aistudio.google.com/app/apikey) (free tier available)
3. Describe your feature in the text area
4. Click "Generate Test Cases"
5. Copy the results using the copy button

**Example Input:**
```
User login feature with username and password
```

---

#### 📊 Test Data Generator
1. Go to "Test Data Gen" in the sidebar
2. Set the number of items to generate (default: 10)
3. Click any data type button (Name, Email, Phone, etc.)
4. Generated data appears instantly
5. Copy using the copy button

**No API key needed** - Works completely offline!

---

#### 🎯 Selector Generator

**AI Mode:**
1. Enter your Gemini API key
2. Describe the element (e.g., "Submit button with blue background")
3. Get CSS and XPath selectors instantly

**Manual Mode:**
1. Enter element details (tag, ID, class, attributes)
2. Selectors generate automatically as you type
3. Use for precise control over selector construction

---

#### 💻 Code Snippet Generator
1. Select your testing framework (Selenium, Playwright, etc.)
2. Enter a CSS selector
3. Choose an action (click, type, etc.)
4. Enter additional parameters if needed (e.g., text to type)
5. Code generates automatically
6. Copy and use in your tests

---

#### 🔤 String Utilities
1. Enter or paste your text
2. Click any transformation button
3. Result appears instantly
4. Use "Swap" to chain transformations
5. Copy the final result

**Example Workflow:**
1. Paste text
2. Click "lowercase"
3. Click "Swap" to move result to input
4. Click "snake_case"
5. Copy final result

---

## 🏗️ Architecture

### Component Hierarchy

```
App.jsx (Root + Router)
├── Sidebar.jsx (Fixed Navigation)
│   └── NavLink Components
│
└── Routes (Main Content Area)
    ├── Dashboard.jsx
    │   └── ToolCard.jsx × 5
    │
    ├── AiTestCaseGenerator.jsx
    │   ├── Input Fields
    │   └── OutputBox → CopyButton
    │
    ├── TestDataGenerator.jsx
    │   ├── Control Panel
    │   └── Output + CopyButton
    │
    ├── SelectorGenerator.jsx
    │   ├── AI Section (with useGemini hook)
    │   │   └── OutputBox × 2 (CSS + XPath)
    │   └── Manual Section
    │       └── OutputBox × 2 (CSS + XPath)
    │
    ├── CodeSnippetGenerator.jsx
    │   ├── Framework Selector
    │   ├── Action Selector
    │   └── Code Output + CopyButton
    │
    └── StringUtilities.jsx
        ├── Input Textarea
        ├── Utility Buttons × 16
        └── Output + CopyButton
```

### Data Flow

#### AI-Powered Tools Flow
```
User Input → Component State → useGemini Hook → Gemini API
                                                      ↓
Component State ← Parse Response ← API Response ←────┘
       ↓
OutputBox Component → CopyButton
```

#### Local Processing Tools Flow
```
User Input → Component State → useEffect / Button Handler
                                        ↓
                              Local JS Function
                                        ↓
                              setState(output)
                                        ↓
                              Display + CopyButton
```

### Routing Structure

```
/                   → Dashboard (Homepage)
/test-cases         → AI Test Case Generator
/test-data          → Test Data Generator
/selectors          → Selector Generator (AI + Manual)
/code-snippets      → Code Snippet Generator
/string-utils       → String Utilities
```

---

## 🎨 Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework with functional components and hooks |
| **React Router** | 6.x | Client-side routing and navigation |
| **Tailwind CSS** | 3.x | Utility-first CSS styling |
| **Vite** | 5.x | Fast build tool and development server |
| **Gemini AI** | 2.5-flash | AI-powered features |

### Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "tailwindcss": "^3.4.1",
  "vite": "^5.4.2"
}
```

### Development Principles

- ✅ Functional components with React Hooks
- ✅ Component-based architecture
- ✅ Clean separation of concerns
- ✅ Reusable components and hooks
- ✅ Modern ES6+ JavaScript
- ✅ Utility-first CSS with Tailwind

---

## 📁 Project Structure

```
quality-automation-hub/
├── public/                      # Static assets
│   └── vite.svg
│
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Sidebar.jsx         # Fixed navigation sidebar
│   │   ├── ToolCard.jsx        # Dashboard tool cards
│   │   ├── OutputBox.jsx       # Consistent output display
│   │   ├── CopyButton.jsx      # Smart copy-to-clipboard
│   │   └── index.js            # Component exports
│   │
│   ├── pages/                   # Route components
│   │   ├── Dashboard.jsx       # Homepage with tool overview
│   │   ├── AiTestCaseGenerator.jsx
│   │   ├── TestDataGenerator.jsx
│   │   ├── SelectorGenerator.jsx
│   │   ├── CodeSnippetGenerator.jsx
│   │   ├── StringUtilities.jsx
│   │   └── index.js            # Page exports
│   │
│   ├── hooks/                   # Custom React hooks
│   │   └── useGemini.js        # Gemini API integration
│   │
│   ├── services/                # API and business logic
│   │
│   ├── App.jsx                  # Main app with router
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
│
├── .gitignore                   # Git ignore rules
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML template
│
├── README.md                   # This file
├── ARCHITECTURE.md             # Detailed architecture docs
├── PROJECT_SUMMARY.md          # Project overview
├── QUICKSTART.md              # Quick start guide
└── CHECKLIST.md               # Implementation checklist
```

---

## 🔑 API Integration

### Gemini AI Setup

For AI-powered features (Test Case Generator and AI Selector Generator), you'll need a free Gemini API key.

#### Getting Your API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

#### Using Your API Key

1. Navigate to any AI-powered tool
2. Paste your API key in the "API Key" input field
3. The key is stored only in memory for the current session
4. **Your key is never saved or logged** - privacy guaranteed

#### API Features

**Model Used:** `gemini-2.5-flash-preview-09-2025`

**Built-in Features:**
- ✅ Exponential backoff retry mechanism (3 retries)
- ✅ Rate limit handling (429 errors)
- ✅ Server error recovery (5xx errors)
- ✅ Loading state indicators
- ✅ Comprehensive error messages

**Free Tier Limits:**
- 60 requests per minute
- 1,500 requests per day

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Development Workflow

1. **Make changes** to source files
2. **Hot Module Replacement** automatically reloads
3. **Test** in browser at `http://localhost:5173`
4. **Build** when ready with `npm run build`
5. **Preview** production build with `npm run preview`

### Component Development

All components follow these patterns:

**Functional Components:**
```javascript
import { useState, useEffect } from 'react';

function MyComponent() {
  const [state, setState] = useState('');
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <div className="tailwind-classes">
      {/* JSX */}
    </div>
  );
}

export default MyComponent;
```

**Custom Hooks:**
```javascript
import { useState } from 'react';

export function useCustomHook() {
  const [data, setData] = useState(null);
  
  const doSomething = async () => {
    // Logic
  };
  
  return { data, doSomething };
}
```

### Styling Guidelines

This project uses **Tailwind CSS exclusively**. No custom CSS classes.

**Color Scheme:**
- Background: `bg-gray-900`, `bg-gray-800`
- Text: `text-gray-200`, `text-gray-400`
- Primary: `bg-blue-600`, `hover:bg-blue-700`
- Success: `text-green-500`
- Error: `text-red-500`

**Common Patterns:**
```javascript
// Card
<div className="bg-gray-800 rounded-lg p-6">

// Button
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">

// Input
<input className="w-full bg-gray-700 text-gray-200 p-3 rounded-lg" />
```

---

## 🏗️ Building for Production

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

**Build includes:**
- ✅ Minified JavaScript
- ✅ Optimized CSS (Tailwind purged)
- ✅ Asset optimization
- ✅ Code splitting
- ✅ Tree shaking

### Preview Production Build

```bash
npm run preview
```

Test the production build locally before deployment.

### Deployment

The `dist/` folder can be deployed to any static hosting service:

- **Vercel** - `vercel deploy`
- **Netlify** - Drag and drop `dist/` folder
- **GitHub Pages** - Push `dist/` to `gh-pages` branch
- **Firebase Hosting** - `firebase deploy`
- **AWS S3** - Upload `dist/` contents

### Environment Variables

For production, you may want to add environment variables:

```bash
# .env.production
VITE_APP_NAME=Quality Automation Hub
VITE_API_ENDPOINT=your-endpoint
```

Access in code:
```javascript
const appName = import.meta.env.VITE_APP_NAME;
```

---

## 🌐 Browser Support

This application works on all modern browsers:

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 90+ |
| Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Opera | 76+ |

**Recommended:** Chrome or Edge for best performance

**Features used:**
- ES6+ JavaScript
- CSS Grid & Flexbox
- Fetch API
- Clipboard API (with fallback)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Bugs

1. Check if the issue already exists
2. Create a new issue with:
   - Clear title
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. Create an issue labeled "enhancement"
2. Describe the feature and use case
3. Explain why it would be valuable

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages (`git commit -m 'Add AmazingFeature'`)
6. Push to branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Code Guidelines

- Use functional components and hooks
- Follow existing code style
- Use Tailwind CSS for styling
- Add comments for complex logic
- Keep components focused and small

---

## 💡 Future Enhancements

### Planned Features

- [ ] **Dark/Light Mode Toggle** - User preference support
- [ ] **API Response Validator** - JSON/XML validation and formatting
- [ ] **SQL Query Generator** - AI-powered SQL generation
- [ ] **Test Report Generator** - Export test results
- [ ] **Screenshot Comparison** - Visual regression testing
- [ ] **Performance Testing Utilities** - Load time analysis
- [ ] **Local Storage** - Save API keys (optional)
- [ ] **Export Functionality** - Download test cases to file
- [ ] **More Frameworks** - Support for additional testing tools
- [ ] **Code Syntax Highlighting** - Enhanced code display
- [ ] **User Preferences** - Save tool settings
- [ ] **Keyboard Shortcuts** - Power user features
- [ ] **Mobile Responsive** - Enhanced mobile experience
- [ ] **PWA Support** - Install as app
- [ ] **Multi-language Support** - i18n integration

### Community Requests

Have an idea? [Create an issue](https://github.com/lirany1/quality-automation-hub/issues) and let's discuss!

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ Free to use
- ✅ Free to modify
- ✅ Free to distribute
- ✅ Commercial use allowed
- ✅ No warranty provided

---

## 🙏 Acknowledgments

### Technologies
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Google Gemini](https://ai.google.dev/) - AI-powered features

### Inspiration
Built with ❤️ for QA engineers and testers who want to automate repetitive tasks and focus on what matters most.

### Contributors
Thanks to all contributors who have helped improve this project!

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/lirany1/quality-automation-hub/issues)
- **Discussions:** [GitHub Discussions](https://github.com/lirany1/quality-automation-hub/discussions)

---

## ⭐ Show Your Support

If you find this project helpful, please consider:
- Starring the repository ⭐
- Sharing with your team
- Contributing improvements
- Reporting bugs
- Suggesting features
- Buying me a coffee ☕

<div align="center">

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-yellow?style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoffee.com/liran80v)

</div>

---

<div align="center">

**Built with ❤️ for QA Engineers**

[Report Bug](https://github.com/lirany1/quality-automation-hub/issues) · [Request Feature](https://github.com/lirany1/quality-automation-hub/issues)

Made with React, Tailwind CSS, and lots of ☕

</div>
