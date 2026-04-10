import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaJava, FaPython, FaJs, FaReact, FaNode,
  FaGitAlt, FaGithub, FaLinux, FaDocker 
} from 'react-icons/fa';
import { 
  SiSpringboot, SiExpress, SiMysql, SiMongodb, SiFirebase, 
  SiPostman, SiTailwindcss, SiMaterialdesign, SiVercel 
} from 'react-icons/si';

const SkillsNew = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", icon: FaJs, color: "#E34F26" },
        { name: "JavaScript", icon: FaJs, color: "#F0DB4F" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Material UI", icon: SiMaterialdesign, color: "#0081CB" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", icon: FaJava, color: "#f89820" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Node.js", icon: FaNode, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: FaPython, color: "#3572A5" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Linux", icon: FaLinux, color: "#FCC624" },
        { name: "Docker", icon: FaDocker, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// My tech stack"}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-accent-purple mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full hover:shadow-glow-blue transition-all duration-300 group"
                      style={{ borderColor: `${skill.color}20` }}
                    >
                      <Icon 
                        className="text-lg group-hover:scale-110 transition-transform" 
                        style={{ color: skill.color }} 
                      />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsNew;
