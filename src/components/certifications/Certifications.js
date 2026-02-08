import React from "react";
import "./Certifications.css";
import { FaCertificate } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Java Spring Boot – REST API Development Certification",
      organization: "EDU CBA",
      date: "Feb 2026"
    },
    {
      title: "Programming Using Java",
      organization: "Wingspan",
      date: "2025"
    },
    {
      title: "Software Engineering and Agile Development",
      organization: "Wingspan",
      date: "2025"
    },
    {
      title: "Linux for Beginners",
      organization: "Wingspan",
      date: "2024"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="certification-card" key={index}>
            <FaCertificate className="cert-icon" />
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p className="cert-org">{cert.organization}</p>
              <p className="cert-date">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
