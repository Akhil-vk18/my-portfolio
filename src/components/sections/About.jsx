import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-gray-400 mb-8 font-mono">
          {"// Who I am and what I do"}
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            I'm a Java Backend Developer with hands-on experience building robust server-side applications 
            using <span className="text-accent-purple font-semibold">Java Spring Boot</span>, RESTful APIs, and MySQL. 
            My passion for development started during my B.Tech in Computer Science at SNM IMT (2021–2025), 
            where I discovered the beauty of solving complex problems through clean, efficient code.
          </p>

          <p>
            My tech stack focuses primarily on <span className="text-accent-blue font-semibold">backend development</span> – 
            from designing scalable APIs to implementing database architectures and integrating frontend systems. 
            I have experience with Object-Oriented Programming, database design, and version control workflows. 
            Recently, I've been diving deeper into microservices architecture and cloud deployment strategies.
          </p>

          <p>
            Throughout my journey, I've completed internships and built several backend-focused projects, 
            including a Job Portal System and an AI-powered healthcare chatbot. 
            My goal is to continuously improve as a developer, contribute to meaningful projects, 
            and eventually build solutions that make a real-world impact.
          </p>
        </div>

        {/* Navigation Hint */}
        <div className="mt-12 pt-6 border-t border-dark-border flex justify-between text-sm text-gray-500">
          <span>← Introduction</span>
          <span>Projects →</span>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
