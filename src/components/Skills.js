import React from "react";
import "./Skills.css";
import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,FaGithub
} from "react-icons/fa";
import { SiExpress, SiStreamlit, SiMysql, SiMongodb } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skill-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card" style={{ "--iconclr": "#f89820" }}>
          
          {/* Java */}
          <span className="icon">
            <FaJava />
          </span>
          <span className="label">Java</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#3572A5" }}>
          
          {/* Python */}
          <span className="icon">
            <FaPython />
          </span>
          <span className="label">Python</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#F0DB4F" }}>
          
          {/* JavaScript */}
          <span className="icon">
            <FaJs />
          </span>
          <span className="label">JavaScript</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#61DAFB" }}>
          
          {/* React */}
          <span className="icon">
            <FaReact />
          </span>
          <span className="label">React</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#000000" }}>
          
          {/* Express */}
          <span className="icon">
            <SiExpress />
          </span>
          <span className="label">Express.js</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#FF4B4B" }}>
          
          {/* Streamlit */}
          <span className="icon">
            <SiStreamlit />
          </span>
          <span className="label">Streamlit</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#F05032" }}>
          
          {/* Git */}
          <span className="icon">
            <FaGitAlt />
          </span>
          <span className="label">Git</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#6e5496" }}>
          
          {/* GitHub */}
          <span className="icon">
            <FaGithub />
          </span>
          <span className="label">GitHub</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#0078D6" }}>
          
          {/* Linux */}
          <span className="icon">
            <FaLinux />
          </span>
          <span className="label">Linux</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#4479A1" }}>
          
          {/* MySQL */}
          <span className="icon">
            <SiMysql />
          </span>
          <span className="label">MySQL</span>
        </div>

        <div className="skill-card" style={{ "--iconclr": "#47A248" }}>
          
          {/* MongoDB */}
          <span className="icon">
            <SiMongodb />
          </span>
          <span className="label">MongoDB</span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
