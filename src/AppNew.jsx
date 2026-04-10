import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import Introduction from './components/sections/Introduction';
import About from './components/sections/About';
import ProjectsNew from './components/sections/ProjectsNew';
import SkillsNew from './components/sections/SkillsNew';
import ExperienceNew from './components/sections/ExperienceNew';
import Education from './components/sections/Education';
import ContactNew from './components/sections/ContactNew';
import Stats from './components/sections/Stats';
import SplashScreen from './components/SplashScreen';
import { Analytics } from '@vercel/analytics/react';

function AppNew() {
  // Show splash only once per browser session
  const [showSplash, setShowSplash] = useState(() => !sessionStorage.getItem('splashShown'));

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashShown', '1');
    setShowSplash(false);
  };
  const [activeSection, setActiveSection] = useState('introduction');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
  };

  const sections = {
    introduction: <Introduction />,
    about: <About onNavigate={handleNavigate} />,
    projects: <ProjectsNew />,
    skills: <SkillsNew />,
    experience: <ExperienceNew />,
    education: <Education />,
    contact: <ContactNew />,
    stats: <Stats />,
  };

  return (
    <>
      {/* Splash screen — shown once per session; fades out then reveals the app */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main app — fades in once splash has exited */}
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-dark-bg text-white overflow-hidden"
        >
          {/* Sidebar */}
          <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

          {/* Main Content Area */}
          <main className="lg:ml-72 min-h-screen overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {sections[activeSection]}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Analytics */}
          <Analytics />
        </motion.div>
      )}
    </>
  );
}

export default AppNew;
