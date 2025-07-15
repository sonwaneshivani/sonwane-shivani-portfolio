import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { PiStackSimpleDuotone } from 'react-icons/pi';

const experiences = [
  {
    title: 'Java Instructor',
    company: 'Tech Nirmaan',
    logo: '/logos/technirmaan.png',
    date: 'Jun 2025 – Present',
    overview:
      'Conducting offline training sessions for 3rd-year students at St. Martin’s Engineering College, delivering structured Java and DSA curriculum.',
    achievements: [
      'Explained DSA concepts and solved problems live using Java.',
      'Cleared doubts and conducted revision sessions for assessments.',
      'Helped students build confidence for placements.'
    ],
    tech: ['Java', 'Data Structures'],
  },
  {
    title: 'Java Backend Developer Intern',
    company: 'EPAM Systems',
    logo: '/logos/epam.png',
    date: 'Jan 2025 – May 2025',
    overview:
      '5-month internship building scalable backend systems with real-world engineering practices in Java and Spring Boot.',
    achievements: [
      'Developed REST APIs and integrated MySQL databases.',
      'Built applications using Spring Boot, Hibernate & AWS.',
      'Followed Agile Scrum and wrote unit tests using JUnit & Mockito.',
    ],
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Microservices', 'Git', 'AWS'],
  },
  {
    title: 'Project Intern – AI/ML (GANs)',
    company: 'NRSC, ISRO',
    logo: '/logos/isro.png',
    date: 'Sep 2024 – Dec 2024',
    overview:
      'Worked on Super-Resolution using GANs for SAR satellite images. Implemented deep learning models to improve clarity of radar imagery.',
    achievements: [
      'Built GANs for super-resolution on SAR data.',
      'Performed data preprocessing, visualization & training.',
      'Submitted project under mentorship at NRSC scientists.',
    ],
    tech: ['Python', 'Machine Learning','Deep Learning', 'GANs'],
  },
  {
    title: 'Teaching Assistant Intern',
    company: 'IFS – Ghana (Summer of Tech)',
    logo: '/logos/ifs.png',
    date: 'Aug 2022 – Sep 2022',
    overview:
      'Supported students in a web development bootcamp by mentoring, preparing quizzes, and clearing frontend development doubts.',
    achievements: [
      'Handled frontend-related doubts for 2 batches.',
      'Created interactive quizzes and helped students debug live.',
      'Explained JS, HTML, and CSS topics clearly to learners.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

const ExperienceCard = ({ exp }) => (
  <motion.div
    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    {/* Header */}
    <div className="flex items-center gap-4 mb-2">
      <div className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center">
      <img
        src={exp.logo}
        alt={exp.company}
        className="w-8 h-8 object-contain"
      />
    </div>

</div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {exp.title}
        </h3>
        <p className="text-sm font-medium text-rose-500 dark:text-rose-400">
          {exp.company} • {exp.date}
        </p>
      </div>
    </div>

    {/* Overview */}
    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
      {exp.overview}
    </p>

    {/* Achievements */}
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-1 text-rose-500 dark:text-rose-400 font-semibold">
        <FaRegCircleCheck /> Key Achievements
      </div>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
        {exp.achievements.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>

    {/* Tech Stack */}
    <div>
      <div className="flex items-center gap-2 mb-1 text-rose-500 dark:text-rose-400 font-semibold">
        <PiStackSimpleDuotone /> Tech Stack
      </div>
      <div className="flex flex-wrap gap-2">
        {exp.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6 md:px-16 bg-gray-50 dark:bg-gray-950">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Career <span className="text-rose-500 dark:text-rose-400">Highights</span>
      </h2>

      <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 mb-12 max-w-2xl mx-auto">
          A glimpse into the roles, projects, and experiences that shaped my journey as a developer.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;