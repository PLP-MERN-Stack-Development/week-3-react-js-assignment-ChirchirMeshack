import React from 'react';
import { Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/ChirchirMeshack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >

            Made with ❤️ by ChirchirMeshack
            <Github className="h-3 w-3 ml-1" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
