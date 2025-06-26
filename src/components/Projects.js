import React from "react";
import './Projects.css';
function Projects() {
  const projectList = [
    {
      title: "AI-Doctor",
      discription:
        "A medical chatbot for disease prediction and self-diagnosis using AI.",
      tech: [
        "Python",
        "Django",
        "Machine Learning (scikit-learn, XGBoost, LightGBM)",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/Akhil-vk18/main-project-ai-project",
    },
    {
      title: "Personal Finance Tracker",
      description:
        "A Streamlit-based personal finance tracker that allows users to log income/expenses, filter by date, and visualize data through interactive graphs. Built with Python and Matplotlib, with CSV-based storage.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "CSV"],
      github: "https://github.com/Akhil-vk18/finance-tracker-",
      // liveDemo: "https://personal-finance-tracker-app.streamlit.app/"
    },
    {
      title: "Carbon Footprint Calculator",
      discription:
        "This project is a mini-project designed to calculate the carbon footprint based on user inputs(e.g., travel, energy usage).Display results and suggestions for reducing carbon footprint",
      tech: ["Python", "Streamlit", "Express.js", "Mongodb"],
      github: "https://github.com/Akhil-vk18/carbonfootprint-calculator.git",
    },
  ];
  return (
    <section id="projects" style={{ padding: "2rem" }} className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div className="project-card">
            <h4>{project.title}</h4>
            <p>{project.discription}</p>
            <p>
              <strong>Tech</strong>: {project.tech.join(" , ")}
            </p>
            <p>
              <a href={project.github} target="blank" rel="noopener noreferrer">
                Source link
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
