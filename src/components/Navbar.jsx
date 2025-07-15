import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const links = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-rose-500 dark:text-rose-400">
          Shivani.dev
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm md:text-base font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className={`relative group transition ${
                activeSection === link
                  ? 'text-rose-500'
                  : 'hover:text-rose-500 text-gray-800 dark:text-gray-100'
              }`}
            >
              {link === 'hero' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-rose-500 transition-all duration-300 ${
                  activeSection === link ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <ThemeToggler />
        </div>

        {/* Mobile Toggle + Theme */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggler />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-gray-900 dark:text-white"
            aria-label="Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-white dark:bg-gray-900 shadow-md z-40 py-6 px-8 space-y-4 text-base font-medium">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setIsOpen(false)}
              className={`block transition ${
                activeSection === link
                  ? 'text-rose-500'
                  : 'text-gray-800 dark:text-gray-100 hover:text-rose-500'
              }`}
            >
              {link === 'hero' ? 'Home' : link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
