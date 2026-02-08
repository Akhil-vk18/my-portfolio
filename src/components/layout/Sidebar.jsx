import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, FaUser, FaCode, FaTools, FaBriefcase, 
  FaGraduationCap, FaEnvelope, FaChartBar, FaBars, FaTimes 
} from 'react-icons/fa';

const Sidebar = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'introduction', label: 'Introduction', icon: FaHome },
    { id: 'about', label: 'About Me', icon: FaUser },
    { id: 'projects', label: 'Projects', icon: FaCode },
    { id: 'skills', label: 'Skills & Tools', icon: FaTools },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
    { id: 'stats', label: 'Stats', icon: FaChartBar },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-lg glass-effect text-white hover:bg-white/10 transition-all"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-dark-card border-r border-dark-border
          flex flex-col p-6 z-40 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          transition-transform duration-300
        `}
      >
        {/* Logo / Portfolio Name */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
            Akhil Santhosh
          </h1>
          <p className="text-sm text-gray-400 mt-1">Java Backend Developer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <React.Fragment key={item.id}>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-purple-blue text-white shadow-glow' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className="text-lg" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
                
                {/* Divider after every 3 items */}
                {(index + 1) % 3 === 0 && index !== navItems.length - 1 && (
                  <div className="h-px bg-dark-border my-2" />
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="mt-6 pt-6 border-t border-dark-border">
          <p className="text-xs text-gray-500 text-center">
            © 2026 Akhil Santhosh
          </p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
