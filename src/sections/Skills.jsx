import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiMicrodotblog,
  SiExpress,
  SiPostman,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';

const SkillCard = ({ icon: Icon, label }) => (
  <motion.div
    className="flex flex-col items-center gap-2 p-4 w-44 md:w-46 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <Icon className="text-3xl md:text-4xl text-rose-500 dark:text-rose-400" />
    <p className="text-sm text-center text-gray-800 dark:text-gray-200">{label}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-950 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto pl-4 md:pl-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-rose-500 dark:text-rose-400">Skills</span>
        </h2>

        {/* Frontend */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-fuchsia-500 text-fuchsia-500">
            🎨 Frontend Technologies
          </h3>
          <div className="flex flex-wrap gap-6">
            <SkillCard icon={FaHtml5} label="HTML" />
            <SkillCard icon={FaCss3Alt} label="CSS" />
            <SkillCard icon={FaJsSquare} label="JavaScript" />
            <SkillCard icon={FaReact} label="React.js" />
          </div>
        </div>

        {/* Backend */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-blue-500 dark:text-blue-400">
            🔧 Backend & Server
          </h3>
          <div className="flex flex-wrap gap-6">
            <SkillCard icon={FaJava} label="Java" />
            <SkillCard icon={SiSpringboot} label="Spring Boot" />
            <SkillCard icon={SiMicrodotblog} label="Microservices" />
            <SkillCard icon={FaNodeJs} label="Node.js" />
            <SkillCard icon={SiExpress} label="Express.js" />
            <SkillCard icon={SiPostman} label="REST APIs" />
          </div>
        </div>

        {/* Database */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-green-500 dark:text-green-400">
            🗄️ Databases
          </h3>
          <div className="flex flex-wrap gap-6">
            <SkillCard icon={SiMysql} label="MySQL" />
            <SkillCard icon={SiMongodb} label="MongoDB" />
          </div>
        </div>

        {/* AI / ML */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-purple-500 dark:text-purple-400">
            🧠 AI / ML
          </h3>
          <div className="flex flex-wrap gap-6">
            <SkillCard icon={FaPython} label="Python" />
            <SkillCard icon={GiArtificialIntelligence} label="Deep Learning" />
            <SkillCard icon={GiArtificialIntelligence} label="Generative AI" />
          </div>
        </div>

        {/* Tools */}
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-yellow-500 dark:text-yellow-400">
            ⚙️ Developer Tools
          </h3>
          <div className="flex flex-wrap gap-6">
            <SkillCard icon={FaGitAlt} label="Git" />
            <SkillCard icon={FaGithub} label="GitHub" />
          </div>
        </div>

        {/* Bottom Summary */}
        <p className="mt-10 text-center text-md md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I enjoy working across the stack — from crafting responsive frontend interfaces to optimizing backend performance and exploring intelligent ML models.
        </p>
      </div>
    </section>
  );
};

export default Skills;
