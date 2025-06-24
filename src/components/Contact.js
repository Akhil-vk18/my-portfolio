import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkedAlt,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <div className="icon-item">
          <a href="mailto:akhilsanthosh043@gmail.com" className="email">
            <span className=" icon">
              <FaEnvelope />
            </span>
            <span className="label">Email</span>
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://github.com/Akhil-vk18"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
          >
            <span className="icon">
              <FaGithub />
            </span>
            <span className="label">Github</span>
          </a>
        </div>
        <div className="icon-item">
          <a
            href="https://www.linkedin.com/in/akhil-santhosh-1b381228a"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
            <span className="label">LinkedIn</span>
          </a>
        </div>
      </div>
      <p className="location">
          <FaMapMarkedAlt style={{ marginRight: "8px" }} />
          Kerala ,India
        </p>
    </section>
  );
}
export default Contact;
