import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full py-4 px-4 md:px-16 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-3
                   md:flex-row md:justify-between md:py-2">
        
        {/* Left - Designed by */}
        <div className="text-center md:text-left text-sm">
          <p>
            Designed and Developed by{' '}
            <span className="font-semibold text-rose-500">Sonwane Shivani</span>
          </p>
        </div>

        {/* Center - Copyright */}
        <div className="text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 text-sm">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-rose-500">SS</span>
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/sonwaneshivani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition"
            aria-label="GitHub Profile"
          >
            <FaGithub className="text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivanisonwane/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://leetcode.com/sonwaneshivani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-500 transition"
            aria-label="LeetCode Profile"
          >
            <FaCode className="text-lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
