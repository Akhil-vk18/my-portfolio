import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceNew = () => {
  const experiences = [
    {
      role: "Developer Intern",
      organization: "Expectation Walkers GenAI Research and Services Pvt. Ltd.",
      location: "Irinjalakuda",
      duration: "Oct 2025 - Jan 2026",
      description: [
        "Supported backend and full-stack development tasks including REST API integration",
        "Worked with Firebase, JavaScript, and database connectivity features",
        "Assisted in debugging, testing, and feature enhancement",
        "Collaborated with developers following structured workflows and documentation practices"
      ],
      current: true
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// Professional journey"}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple to-accent-blue"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Dot Indicator */}
                <div className="absolute left-0 md:left-8 top-4 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-purple border-4 border-dark-bg"></div>

                {/* Latest Badge */}
                {exp.current && (
                  <span className="absolute left-6 md:left-14 top-2 px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full z-10">
                    Latest
                  </span>
                )}

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <FaBriefcase className="text-xl text-accent-purple mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <p className="text-accent-blue text-sm">{exp.organization}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                    <p className="flex items-center gap-2">
                      <FaCalendar className="text-accent-purple" />
                      {exp.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-accent-purple" />
                      {exp.location}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2 leading-relaxed">
                        <span className="text-accent-purple mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceNew;
