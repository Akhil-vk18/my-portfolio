import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const ProjectsNew = () => {
  const projects = [
    {
      title: "Job Portal Backend",
      description: "RESTful API system built with Spring Boot featuring MVC architecture, MySQL integration, job listings, and user management modules.",
      tech: ["Java", "Spring Boot", "MySQL", "REST API", "Postman"],
      github: "https://github.com/Akhil-vk18/job-portal-backend",
      live: null,
      period: "Nov 2025 - Dec 2025",
      tag: "Backend"
    },
    {
      title: "Job Portal Frontend",
      description: "Responsive React frontend for the Job Portal System. Connects to the Spring Boot backend with job listings, user authentication UI, and application tracking.",
      tech: ["React", "Tailwind CSS", "Axios", "REST API"],
      github: "https://github.com/Akhil-vk18/job-portal-frontend",
      live: null,
      period: "Nov 2025 - Dec 2025",
      tag: "Frontend"
    },
    {
      title: "Job Portal Scraper",
      description: "Spring Boot-based web scraper that extracts job listings from Infopark job portal using Jsoup. Stores structured job data (title, company, requirements, deadlines) into MySQL via Spring Data JPA — acts as a data feed for the Job Portal backend.",
      tech: ["Java", "Spring Boot", "Jsoup", "MySQL", "Spring Data JPA", "Maven"],
      github: "https://github.com/Akhil-vk18/Scrapper-java",
      live: null,
      period: "Sep 2025",
      tag: "Backend"
    },
    {
      title: "Finance Tracker",
      description: "Python project to track personal finances with CSV-based data storage and graph plotting capabilities using pandas and matplotlib.",
      tech: ["Python", "Pandas", "Matplotlib", "Streamlit", "CSV"],
      github: "https://github.com/Akhil-vk18/finance-tracker-",
      live: null,
      period: "Feb 2025",
      tag: "Data"
    },
    {
      title: "AI-Doctor",
      description: "Medical chatbot for disease prediction and self-diagnosis. Features backend services for symptom analysis and doctor recommendations.",
      tech: ["Python", "Django", "Machine Learning", "REST API"],
      github: "https://github.com/Akhil-vk18/main-project-ai-project",
      live: null,
      period: "Jul 2024 - Feb 2025",
      tag: "AI/ML"
    },
    {
      title: "Carbon Footprint Calculator",
      description: "Backend APIs built with Express.js for emission calculations. Integrated Firebase authentication and database services.",
      tech: ["Express.js", "Firebase", "MongoDB", "REST API"],
      github: "https://github.com/Akhil-vk18/carbonfootprint-calculator.git",
      live: null,
      period: "Apr 2024 - May 2024",
      tag: "Backend"
    },
    {
      title: "Portfolio Website",
      description: "Modern Spring Boot-themed portfolio with glassmorphism design, smooth animations, GitHub stats, and direct contact form integration.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Akhil-vk18/my-portfolio",
      live: "https://akhil-santhosh.vercel.app",
      period: "2024 - 2026",
      tag: "Frontend"
    }
  ];

  const tagColors = {
    Backend: "bg-accent-purple/20 text-accent-purple border-accent-purple/30",
    Frontend: "bg-accent-blue/20 text-accent-blue border-accent-blue/30",
    "AI/ML": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Data: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Automation: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <SiSpringboot className="text-4xl text-accent-purple" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            {"// Things I've built"}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-accent-purple/40 transition-all duration-300 group flex flex-col"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{project.period}</p>
                {project.tag && (
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${tagColors[project.tag] || 'bg-white/10 text-gray-400 border-white/20'}`}>
                    {project.tag}
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-purple transition-colors">
                {project.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-accent-purple/10 rounded text-accent-purple border border-accent-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub />
                  View Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-accent-purple hover:text-accent-blue transition-colors font-medium"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsNew;
