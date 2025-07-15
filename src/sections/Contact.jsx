import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_r4swl3m',
        'template_7ybgmkm',
        form.current,
        'KuAcnM_uE3cGiv4f1'
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Get In <span className="text-rose-500 dark:text-rose-400">Touch.</span>
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        Have a project in mind? Let's work together!
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Let's build something amazing together</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out to me through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-md font-medium">sonwaneshivani2004@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-md font-medium">Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Socials */}
        <div className="flex gap-8 mt-6">
          <a href="mailto:sonwaneshivani2004@gmail.com" aria-label="Send Email">
            <FaEnvelope className="text-xl hover:text-rose-500" />
          </a>
          <a href="https://github.com/sonwaneshivani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-xl hover:text-rose-500" />
          </a>
          <a href="https://www.linkedin.com/in/shivanisonwane/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-rose-500" />
          </a>
          <a href="https://leetcode.com/sonwaneshivani" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <FaCode className="text-xl hover:text-rose-500" />
          </a>
        </div>

        </div>

        {/* Right Side - Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="p-2 rounded border dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="p-2 rounded border dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="p-2 rounded border dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
          >
            Send Message
          </button>

          {success && <p className="text-green-500 mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
