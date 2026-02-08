import React from "react";
import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaDatabase,
  FaNode,
} from "react-icons/fa";
import { SiSpringboot, SiExpress, SiMysql, SiMongodb, SiFirebase, SiPostman } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "SQL", icon: <FaDatabase />, color: "#00758F" },
      { name: "JavaScript", icon: <FaJs />, color: "#F0DB4F" },
      { name: "Python", icon: <FaPython />, color: "#3572A5" },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
      { name: "REST API", icon: <FaNode />, color: "#339933" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#6e5496" },
      { name: "Linux", icon: <FaLinux />, color: "#0078D6" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skill-section">
      <h2>Technical Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((category) => (
          <div className="skills-category" key={category.title}>
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div
                  className="skill-card"
                  key={skill.name}
                  style={{ "--iconclr": skill.color }}
                >
                  <span className="icon">{skill.icon}</span>
                  <span className="label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
