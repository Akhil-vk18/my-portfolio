import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      college: "SNM IMT Maliankara",
      location: "Ernakulam, Kerala",
      duration: "2021 - 2025",
      cgpa: "7.74/10",
      focus: "Backend Development, OOP, Database Design"
    },
    {
      degree: "Higher Secondary Education (Computer Science)",
      college: "National HSS Irinjalakuda",
      location: "Thrissur, Kerala",
      duration: "2020 - 2021",
      cgpa: "Pass",
      focus: "Computer Science Fundamentals"
    },
    {
      degree: "Secondary Education (SSLC)",
      college: "National HSS Irinjalakuda",
      location: "Thrissur, Kerala",
      duration: "2018 - 2019",
      cgpa: "Pass",
      focus: "General Education"
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// Academic journey"}
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple to-accent-blue"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
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
                {index === 0 && (
                  <span className="absolute left-6 md:left-14 top-2 px-2 py-1 bg-accent-purple/20 text-accent-purple text-xs rounded-full z-10">
                    Latest
                  </span>
                )}

                {/* Content Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <FaGraduationCap className="text-xl text-accent-purple mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-accent-blue text-sm">{edu.college}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-500">
                    <p>📍 {edu.location}</p>
                    <p>📅 {edu.duration}</p>
                    <p>📊 {edu.cgpa}</p>
                    <p>🎯 {edu.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
