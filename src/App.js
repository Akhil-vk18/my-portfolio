import Navigation from "./components/navigation/Navigation";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Profile from "./components/profile/Profile";
import "./App.css";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
// import ToggleTheme from './components/ToggleTheme';
import React, { useState } from "react";
import Cover from "./components/cover/Cover";
import AnimatedContent from "./reactbits/AnimatedContent/AnimatedContent";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [darkmode, setDarkMode] = useState(true);
  return (
    <div className="main">
      <div className={darkmode ? "dark" : "light"}>
        <Navigation darkmode={darkmode} setDarkMode={setDarkMode} />

        <Cover />
        <hr />

        <Profile />
        <hr />
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.8}
          threshold={0.1}
          delay={0.1}
        >
          <Skills />
        </AnimatedContent>
        <hr />
        <Projects />
        <hr />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </div>
  );
}

export default App;
