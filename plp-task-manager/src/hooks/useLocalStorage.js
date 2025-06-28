import { useState } from 'react';

/**
 * Custom hook to persist state in localStorage
 * @param {string} key - The localStorage key
 * @param {any} initialValue - The initial value
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Ignore write errors
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
