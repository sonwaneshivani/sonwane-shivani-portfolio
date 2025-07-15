import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Diabetes Prediction System',
    image: '/projects/diabetes.png',
    description: 'A machine learning-based system that predicts diabetes risk from patient health data. Includes UI, model visualization.',
    tech: ['Python', 'Sklearn', 'Flask'],
    demoLink: 'https://diabetes-prediction-xawt.onrender.com/',
    gitLink: 'https://github.com/sonwaneshivani/Diabetes-Prediction.git',
  },
  {
    title: 'Web Scrapper',
    image: '/projects/scraper.png',
    description: 'Scrapes product data from e-commerce websites and displays the results in an organized format. Designed for price comparison & analytics.',
    tech: ['Python', 'BeautifulSoup', 'Flask'],
    demoLink: 'https://webscrapper-hloj.onrender.com/',
    gitLink: 'https://github.com/sonwaneshivani/webScrapper.git',
  },
  {
    title: 'Indoor Navigation for Museums',
    image: '/projects/museum.png',
    description: 'An indoor navigation system for museums using Android. It helps users navigate through exhibits with real-time guidance.',
    tech: ['Dijkstra\'s Algorithm', 'React Native', 'Firebase'],
    demoLink: 'https://github.com/sonwaneshivani/Indoor-navigations-for-museum.git',
    gitLink: 'https://github.com/sonwaneshivani/Indoor-navigations-for-museum.git',
  },
  {
    title: 'In-house LLM for R&D Centers',
    image: '/projects/llm.png',
    description: 'A custom-built LLM-based chatbot tailored for private R&D use cases. Supports document summarization, Q&A, and grammatical checking.',
    tech: ['Python', 'LLMs', 'Flask'],
    demoLink: 'https://github.com/sonwaneshivani/Inhouse-LLM-for-Research-and-Development-Centres.git',
    gitLink: 'https://github.com/sonwaneshivani/Inhouse-LLM-for-Research-and-Development-Centres.git',
  },
  {
    title: 'Residence Finder',
    image: '/projects/residence.png',
    description: 'A full-stack web app to help users find and filter rental properties by location, price, and preferences. Built with MERN stack.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://github.com/sonwaneshivani/Residence-Finder.git',
    gitLink: 'https://github.com/sonwaneshivani/Residence-Finder.git',
  },
  {
    title: 'Foodie Me (Food Delivery App)',
    image: '/projects/foodie.png',
    description: 'A food ordering system with restaurant listings, user login, cart, and order tracking. Built with Java.',
    tech: ['Java', 'Core Java'],
    demoLink: 'https://github.com/sonwaneshivani/Food-Delivery.git',
    gitLink: 'https://github.com/sonwaneshivani/Food-Delivery.git',
  },
];

const ProjectCard = ({ proj, idx }) => (
  <motion.div
    className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col transition-transform"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.1, delay: idx * 0.1 }}
    viewport={{ once: true }}
  >
    <img
      src={proj.image}
      alt={proj.title}
      className="rounded-md object-cover h-40 w-full mb-4"
    />
    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
      {proj.title}
    </h3>
    <p className="text-sm text-gray-700 dark:text-gray-300 flex-1">
      {proj.description}
    </p>
    <div className="mt-4">
      <div className="flex flex-wrap gap-2 mb-3">
        {proj.tech.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {proj.demoLink && (
          <a
            href={proj.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-rose-500 text-white rounded hover:bg-rose-600 transition text-sm"
          >
            Live Demo
          </a>
        )}
        {proj.gitLink && (
          <a
            href={proj.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-rose-500 text-rose-500 rounded hover:bg-rose-500 hover:text-white transition text-sm"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-rose-500 dark:text-rose-400">Projects</span>
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A selection of projects I&apos;ve built with technologies I enjoy working with.
      </motion.p>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} idx={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
