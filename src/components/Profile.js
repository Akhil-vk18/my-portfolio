import react from "react";
import "./Profile.css";

function Profile() {
  return (
    <section id="profile" className="profile-section">
      <div className="profile-container">
        <div className="profile-text">
          <p>
            👋 Hi, I'm Akhil Santhosh, a B.Tech Computer Science and Engineering
            graduate (2021–2025) with a passion for building meaningful software
            solutions. I specialize in Python, Java, and web development using
            tools like Streamlit and Express.js. I've worked on projects such as
            an AI Doctor Chatbot, a Personal Finance Tracker, and a Carbon
            Footprint Calculator, all aimed at solving real-world problems
            through technology. I'm a strong believer in open-source
            collaboration, enjoy working with Linux systems, and love learning
            new technologies. My goal is to create software that not only works
            but makes a positive impact. 💻 Currently exploring full-stack
            development, API design, and cloud deployment. 📫 Feel free to
            connect with me on LinkedIn or check out my work on GitHub.
          </p>
        <a href="Akhil_Santhosh-resume.pdf" download className="resume">Resume</a>
        </div>
        <div className="profile-picture">
            <img src="akhil.jpg" alt="Akhil Santhosh" />
        </div>
      </div>
    </section>
  );
}

export default Profile;
