import "./Projects.css";
function Projects() {
  const projectList = [
    {
      className: "job-portal",
      title: "Job Portal Backend System",
      description:
        "RESTful API system using Java Spring Boot with MVC architecture and MySQL integration. Features job listings, user management, and data retrieval modules.",
      tech: [
        "Java",
        "Spring Boot",
        "REST API",
        "MySQL",
        "Postman",
        "MVC Architecture"
      ],
      github: "https://github.com/Akhil-vk18",
      period: "Nov 2025 - Dec 2025"
    },
    {
      className: "ai-doctor",
      title: "AI-Doctor",
      description:
        "Medical chatbot for disease prediction and self-diagnosis using AI. Developed backend services for symptom analysis and doctor recommendations with REST API integration.",
      tech: [
        "Python",
        "Django",
        "Machine Learning (scikit-learn, XGBoost, LightGBM)",
        "REST API",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/Akhil-vk18/main-project-ai-project",
      period: "Jul 2024 - Feb 2025"
    },
    {
      className: "carbon-footprint",
      title: "Carbon Footprint Calculator",
      description:
        "Built backend APIs using Express.js for emission calculations. Integrated Firebase authentication and database services for real-time data processing.",
      tech: ["Python", "Express.js", "Firebase", "MongoDB", "REST API"],
      github: "https://github.com/Akhil-vk18/carbonfootprint-calculator.git",
      period: "Apr 2024 - May 2024"
    },
  ];
  return (
    <section
      id="projects"
      style={{ padding: "2rem" }}
      className="projects-section"
    >
      <h2>Backend Projects</h2>
      <div className="card-container">
        {projectList.map((project, index) => (
          <div className={`card ${project.className}`} key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h4>{project.title}</h4>
                <p className="project-period">{project.period}</p>
                <p>{project.description}</p>
              </div>
              <div className="card-back">
                <p>
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Source Code
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
