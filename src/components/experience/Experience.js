import React from "react";
import "./Experience.css";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      title: "Developer Intern",
      company: "Expectation Walkers GenAI Research and Services Pvt. Ltd.",
      location: "Irinjalakuda",
      duration: "Oct 2025 - Jan 2026",
      responsibilities: [
        "Supported backend and full-stack development tasks including REST API integration",
        "Worked with Firebase, JavaScript, and database connectivity features",
        "Assisted in debugging, testing, and feature enhancement",
        "Collaborated with developers following structured workflows and documentation practices"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div className="experience-title-section">
                <h3>
                  <FaBriefcase className="inline-icon" />
                  {exp.title}
                </h3>
                <h4>{exp.company}</h4>
              </div>
              <div className="experience-meta">
                <p className="experience-duration">
                  <FaCalendar className="inline-icon" />
                  {exp.duration}
                </p>
                <p className="experience-location">
                  <FaMapMarkerAlt className="inline-icon" />
                  {exp.location}
                </p>
              </div>
            </div>
            <ul className="experience-responsibilities">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
