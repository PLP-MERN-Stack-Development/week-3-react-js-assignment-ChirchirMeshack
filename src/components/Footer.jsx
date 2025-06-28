import React from 'react';
import { Github } from 'lucide-react';

/**
 * Footer component
 * @param {Object} props
 * @param {string} [props.author] - The author name to display
 * @param {string} [props.githubUrl] - The GitHub profile URL
 * @param {React.ReactNode} [props.children] - Optional children to render inside the footer
 */
function Footer({ author = 'ChirchirMeshack', githubUrl = 'https://github.com/ChirchirMeshack', children }) {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Made with ❤️ by {author}
            <Github className="h-3 w-3 ml-1" />
            <span className="ml-1">GitHub</span>
          </a>
          {children}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
