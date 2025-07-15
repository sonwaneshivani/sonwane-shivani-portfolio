import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.svg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] px-6 md:px-16 py-6 md:py-12 overflow-hidden">
      <motion.div
        id="hero"
        className="flex flex-col-reverse md:flex-row items-center justify-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left - Text */}
        <div className="flex-1 flex flex-col pl-6 md:pl-14">
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-rose-500 dark:text-rose-400 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi There! 👋🏻
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'M Sonwane Shivani
          </motion.h2>

          <motion.h3
            className="mt-4 text-lg md:text-2xl font-medium text-rose-500 dark:text-rose-400 min-h-[40px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Typewriter
              words={[
                'Software Engineer',
                'Backend Developer',
                'AI/ML Enthusiast',
                'Web Developer',
                'Full Stack Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h3>
        </div>

        {/* Right - Avatar */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end px-2 md:pr-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={avatar}
            alt="Shivani Avatar"
            className="w-full max-w-xs md:max-w-sm object-cover rounded-xl"
          />
        </motion.div>
      </motion.div>

      {/* Scroll Down Button */}
      <a
        href="#about"
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 
                   inline-flex items-center gap-2 border border-rose-500 text-rose-500 
                   px-4 py-2 rounded-full hover:bg-rose-500 hover:text-white transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
