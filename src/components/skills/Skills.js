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
} from "react-icons/fa";
import { SiExpress, SiStreamlit, SiMysql, SiMongodb } from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "Python", icon: <FaPython />, color: "#3572A5" },
      { name: "JavaScript", icon: <FaJs />, color: "#F0DB4F" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "Express.js", icon: <SiExpress />, color: "#000000" },
      { name: "Streamlit", icon: <SiStreamlit />, color: "#FF4B4B" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      { name: "GitHub", icon: <FaGithub />, color: "#6e5496" },
      { name: "Linux", icon: <FaLinux />, color: "#0078D6" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skill-section">
      <h2>Skills</h2>
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
