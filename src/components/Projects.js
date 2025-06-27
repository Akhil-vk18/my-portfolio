import React from "react";
import "./Projects.css";
function Projects() {
  const projectList = [
    {
      className: "ai-doctor",
      title: "AI-Doctor",
      description:
        "A medical chatbot for desease prediction and self-diagnosis using AI.",
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
      className: "finance-tracker",
      title: "Personal Finance Tracker",
      description:
        "A Streamlit-based personal finance tracker that allows users to log income/expenses, filter by date, and visualize data through interactive graphs. Built with Python and Matplotlib, with CSV-based storage.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "CSV"],
      github: "https://github.com/Akhil-vk18/finance-tracker-",
      // liveDemo: "https://personal-finance-tracker-app.streamlit.app/"
    },
    {
      className: "carbon-footprint ",
      title: "Carbon Footprint Calculator",
      description:
        "This project is a mini-project designed to calculate the carbon footprint based on user inputs(e.g., travel, energy usage).desplay results and suggestions for reducing carbon footprint",
      tech: ["Python", "Streamlit", "Express.js", "Mongodb"],
      github: "https://github.com/Akhil-vk18/carbonfootprint-calculator.git",
    },
  ];
  return (
    <section
      id="projects"
      style={{ padding: "2rem" }}
      className="projects-section"
    >
      <h2>Projects</h2>
      <div className="card-container">
        {projectList.map((project) => (
          <div className={`card ${project.className}`}>
            <div className="card-inner">
              <div className="card-front">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              <div className="card-back">
                <p>
                  <strong>Tech:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
