import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">PLP Task Manager</span>
        {/* Add navigation links here if needed */}
      </div>
    </nav>
  );
}

export default Navbar;
