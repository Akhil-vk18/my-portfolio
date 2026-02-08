import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectsNew = () => {
  const projects = [
    {
      title: "Job Portal Backend System",
      description: "RESTful API system built with Spring Boot featuring MVC architecture, MySQL integration, job listings, and user management modules.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API", "Postman"],
      github: "https://github.com/Akhil-vk18",
      period: "Nov 2025 - Dec 2025"
    },
    {
      title: "AI-Doctor",
      description: "Medical chatbot for disease prediction and self-diagnosis. Features backend services for symptom analysis and doctor recommendations.",
      tech: ["Python", "Django", "Machine Learning", "REST API"],
      github: "https://github.com/Akhil-vk18/main-project-ai-project",
      period: "Jul 2024 - Feb 2025"
    },
    {
      title: "Carbon Footprint Calculator",
      description: "Backend APIs built with Express.js for emission calculations. Integrated Firebase authentication and database services.",
      tech: ["Express.js", "Firebase", "MongoDB", "REST API"],
      github: "https://github.com/Akhil-vk18/carbonfootprint-calculator.git",
      period: "Apr 2024 - May 2024"
    },
    {
      title: "Portfolio Website",
      description: "Modern dark-theme portfolio with glassmorphism design, smooth animations, and responsive layout.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Akhil-vk18/my-portfolio",
      period: "2024"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// Things I've built"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 card-hover group"
            >
              {/* Period */}
              <p className="text-xs text-accent-purple font-mono mb-2">{project.period}</p>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-purple transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/5 rounded-full text-gray-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-blue transition-colors"
                >
                  <FaGithub />
                  Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent-purple transition-colors"
                >
                  <FaExternalLinkAlt />
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;
