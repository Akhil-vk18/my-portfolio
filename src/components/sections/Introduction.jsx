import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Introduction = () => {
  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent"
        >
          Akhil Santhosh
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-6 font-mono"
        >
          Coder by day, problem-solver by night ☕
        </motion.p>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl"
        >
          Java Backend Developer specializing in building scalable applications with Spring Boot. 
          Passionate about clean code, API design, and solving complex backend challenges. 
          Currently exploring cloud technologies and microservices architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-8"
        >
          <a
            href="/Akhil_Santhosh-resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-purple-blue text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <FaDownload />
            Get Resume
          </a>
          <a
            href="mailto:connectwithakhilsanthosh@gmail.com"
            className="flex items-center gap-2 px-6 py-3 glass-effect text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
          >
            <FaEnvelope />
            Send Mail
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4"
        >
          <a
            href="https://github.com/Akhil-vk18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akhil-santhosh-1b381228a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Introduction;
