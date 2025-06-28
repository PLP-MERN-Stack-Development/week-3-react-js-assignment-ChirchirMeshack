import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useTheme } from '../contexts/ThemeContext';

/**
 * TaskManager component
 * - Add, complete, delete, and filter tasks
 * - Persists tasks in localStorage
 * - Uses theme context for light/dark mode
 */
const FILTERS = {
  ALL: 'All',
  ACTIVE: 'Active',
  COMPLETED: 'Completed',
};

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState(FILTERS.ALL);
  const { theme, toggleTheme } = useTheme();

  // Add new task
  const addTask = e => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  // Toggle task completion
  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Filter tasks
  const filteredTasks = tasks.filter(t => {
    if (filter === FILTERS.ALL) return true;
    if (filter === FILTERS.ACTIVE) return !t.completed;
    if (filter === FILTERS.COMPLETED) return t.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-900 rounded shadow mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Task Manager</h2>
        <button
          onClick={toggleTheme}
          className="px-2 py-1 rounded text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
      <form onSubmit={addTask} className="flex mb-4">
        <input
          className="flex-1 px-2 py-1 border rounded-l bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          type="submit"
          className="px-4 py-1 bg-primary-600 text-white rounded-r hover:bg-primary-700 transition"
        >
          Add
        </button>
      </form>
      <div className="flex gap-2 mb-4">
        {Object.values(FILTERS).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-2 py-1 rounded text-xs ${filter === f ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'} transition`}
          >
            {f}
          </button>
        ))}
      </div>
      <ul className="space-y-2">
        {filteredTasks.length === 0 && (
          <li className="text-xs text-gray-400 text-center">No tasks</li>
        )}
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-1 cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="ml-2 text-xs text-red-500 hover:text-red-700"
              aria-label="Delete"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
