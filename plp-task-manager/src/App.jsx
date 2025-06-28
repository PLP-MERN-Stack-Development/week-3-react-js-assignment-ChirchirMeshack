import { useState } from 'react';
import './App.css';
import Layout from './layouts'; // Layout component wraps Navbar, Footer, and main content
import Card from './components/Card'; // Card component for boxed content layout
import Button from './components/Button'; // Reusable Button component with variants

/**
 * Main App component for the PLP Task Manager
 * Demonstrates component composition, state management, and layout
 */
function App() {
  // State hook for the counter demo
  const [count, setCount] = useState(0);

  return (
    // Layout provides consistent site structure (Navbar, Footer, theming)
    <Layout>
      {/* Main content container with responsive padding */}
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Card for the counter demo */}
        <Card>
          <div className="flex flex-col items-center justify-center">
            {/* Instructional text */}
            <p className="text-lg mb-4">
              Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/App.jsx</code> and save to test HMR
            </p>
            {/* Counter controls using Button component */}
            <div className="flex items-center gap-4 my-4">
              <Button variant="danger" onClick={() => setCount((count) => count - 1)}>-</Button>
              <span className="text-xl font-bold">{count}</span>
              <Button variant="primary" onClick={() => setCount((count) => count + 1)}>+</Button>
            </div>
            {/* Placeholder for TaskManager component */}
            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Implement your TaskManager component here
            </p>
          </div>
        </Card>
        {/* Card for API data display */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Fetch and display data from an API here
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default App;