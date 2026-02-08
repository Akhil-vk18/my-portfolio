import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// "Akhil" in different Indian languages
const nameTranslations = [
  { language: 'English', name: 'Akhil', script: 'Latin' },
  { language: 'Hindi', name: 'अखिल', script: 'Devanagari' },
  { language: 'Tamil', name: 'அகில்', script: 'Tamil' },
  { language: 'Telugu', name: 'అఖిల్', script: 'Telugu' },
  { language: 'Malayalam', name: 'അഖിൽ', script: 'Malayalam' },
  { language: 'Kannada', name: 'ಅಖಿಲ್', script: 'Kannada' },
  { language: 'Bengali', name: 'অখিল', script: 'Bengali' },
  { language: 'Gujarati', name: 'અખિલ', script: 'Gujarati' },
  { language: 'Punjabi', name: 'ਅਖਿਲ', script: 'Gurmukhi' },
  { language: 'Marathi', name: 'अखिल', script: 'Devanagari' },
];

const MultilingualName = ({ interval = 2500, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % nameTranslations.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  const currentTranslation = nameTranslations[currentIndex];

  return (
    <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-2xl md:text-3xl font-bold text-cyan-400">
            {currentTranslation.name}
          </span>
          <span className="text-xs md:text-sm text-gray-400 font-mono">
            {currentTranslation.language}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MultilingualName;
