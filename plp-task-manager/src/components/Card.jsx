import React from 'react';

function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 shadow rounded-lg p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
