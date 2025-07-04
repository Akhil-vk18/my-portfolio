import React, { useState } from "react";
import "./Navigation.css";
import ToggleTheme from "./ToggleTheme";
function Navigation({ darkmode, setDarkMode }) {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (href) => {
    setActiveLink(href); // Set active link when clicked
  };
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-content">
          <a
            href="#profile"
            className={activeLink === "#profile" ? "active" : ""}
            onClick={() => handleLinkClick("#profile")}
          >
            Profile
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

          {/* <div className={darkmode ? "dark" : "light"}> */}
          <ToggleTheme darkmode={darkmode} setDarkMode={setDarkMode} />
          {/* </div> */}
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
