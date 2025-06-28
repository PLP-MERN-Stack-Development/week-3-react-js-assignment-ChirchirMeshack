import { useState } from 'react';
import './App.css';
import Layout from './layouts'; // Layout component wraps Navbar, Footer, and main content
import Card from './components/Card'; // Card component for boxed content layout
import Button from './components/Button'; // Reusable Button component with variants
import TaskManager from './components/TaskManager';
import ApiData from './components/ApiDataList';

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
      
            {/* TaskManager component */}
           
              <TaskManager />
        {/* Card for API data display */}
        <div className="mt-8">
          <Card>
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            <p className="text-gray-500 dark:text-gray-400">
              <ApiData/>
            </p>
          </Card>
        </div>
    </Layout>
  );
}

export default App;