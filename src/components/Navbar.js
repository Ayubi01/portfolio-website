import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply or remove 'dark' class on HTML tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
        {/* Brand */}
        <div className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
          Ayush
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-800 dark:text-gray-200">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-3 md:mt-0 px-3 py-1 rounded-xl bg-gray-200 dark:bg-gray-700 text-sm text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
