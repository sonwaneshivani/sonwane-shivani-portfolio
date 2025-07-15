import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Navbar from './components/Navbar';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar></Navbar>
      <div className="pt-20"> {/* to avoid navbar overlap */}
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
