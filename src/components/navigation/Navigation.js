import React, { useState, useEffect } from "react";
import "./Navigation.css";
import ToggleTheme from "../toogleTheme/ToggleTheme";

function Navigation({ darkmode, setDarkMode }) {
  const [activeLink, setActiveLink] = useState("");
  const [navWidth, setNavWidth] = useState(60); // Start at 60%

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust these values for min/max width and scroll sensitivity
      const minWidth = 35; // percent
      const maxWidth = 60; // percent
      const scrollY = window.scrollY;
      const maxScroll = 300; // px after which nav is at min width

      // Calculate new width
      let newWidth =
        maxWidth -
        ((maxWidth - minWidth) * Math.min(scrollY, maxScroll)) / maxScroll;
      setNavWidth(newWidth);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <header>
      <nav
        className="nav-bar"
        style={{
          width: `${navWidth}%`,
          marginLeft: `${(100 - navWidth) / 2}%`,
        }}
      >
        <a
          href="https://github.com/Akhil-vk18"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-github-logo"
          aria-label="GitHub"
        >
          <img src="https://github.com/Akhil-vk18.png" alt="GitHub" />
        </a>
        <div className="nav-content">
          <a
            href="#profile"
            className={activeLink === "#profile" ? "active" : ""}
            onClick={() => handleLinkClick("#profile")}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeLink === "#experience" ? "active" : ""}
            onClick={() => handleLinkClick("#experience")}
          >
            Experience
          </a>
          <a
            href="#skills"
            className={activeLink === "#skills" ? "active" : ""}
            onClick={() => handleLinkClick("#skills")}
          >
            Skills
          </a>
          <a
            href="#projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => handleLinkClick("#projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleLinkClick("#contact")}
          >
            Contact
          </a>
          <ToggleTheme darkmode={darkmode} setDarkMode={setDarkMode} />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
