import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-20 py-14 px-8 md:px-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="text-rose-500 dark:text-rose-400">Me</span>
        </h2>

        {/* Short Intro */}
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-700 dark:text-gray-300">
          I’m <strong>Shivani Sonwane</strong>, a passionate Software Developer focused on Backend engineering and AI/ML.
          I love building scalable systems, solving real-world problems, and working on projects that truly matter.
        </p>

        {/* Animated Info Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {/* Education Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaGraduationCap className="text-2xl text-rose-500" />
              <h3 className="text-lg font-semibold">Education</h3>
            </div>
            <p className="text-base  mb-2">
              B.Tech – CSE (AI & ML), KMIT, Hyderabad (2021–2025)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 8.34</p>
          </motion.div>

          {/* Internship Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBriefcase className="text-2xl text-blue-500" />
              <h3 className="text-lg font-semibold">Current Role</h3>
            </div>
            <p className="text-base  mb-2">
              Software Developer Intern @ EPAM
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 ">
              Building Java backend services, Spring Boot, Microservices & Scalable APIs.
            </p>
          </motion.div>

          {/* Hackathon Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaTrophy className="text-2xl text-yellow-500" />
              <h3 className="text-lg font-semibold">Hackathons</h3>
            </div>
            <p className="text-base mb-2">Winner – National Level Hackathon (NNRG, 2023)</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 ">
              Participated in 5+ hackathons. Love solving under pressure.
            </p>
          </motion.div>
        </div>

        {/* Quote */}
        <p className="italic text-lg text-gray-600 dark:text-gray-300 mt-12">
          “I believe in building tech that’s simple, purposeful, and real.”
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/Sonwane_Shivani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-rose-500 text-white rounded-md shadow hover:bg-rose-600 transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
