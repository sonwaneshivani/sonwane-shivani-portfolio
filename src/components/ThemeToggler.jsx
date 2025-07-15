import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggler = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <FaMoon className="text-gray-800" />
      ) : (
        <FaSun className="text-yellow-300" />
      )}
    </button>
  );
};

export default ThemeToggler;