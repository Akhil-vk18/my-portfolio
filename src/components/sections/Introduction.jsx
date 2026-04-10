import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaQuoteLeft } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const fallbackQuotes = [
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
];

const Introduction = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://thequoteshub.com/api/tags/computers')
      .then((res) => res.json())
      .then((data) => {
        const quotes = data.quotes;
        if (quotes && quotes.length > 0) {
          setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
        } else {
          setQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
        }
      })
      .catch(() => {
        setQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
      });
  }, []);

  return (
    <section id="introduction" className="min-h-screen flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center"
      >
        {/* ── Left column (3/5) ── */}
        <div className="lg:col-span-3">
          {/* Spring Boot badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-4"
          >
            <SiSpringboot className="text-accent-purple text-xl" />
            <span className="text-sm text-accent-purple font-mono uppercase tracking-widest">Spring Boot Developer</span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent"
          >
            Akhil Santhosh
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-6 font-mono"
          >
            Coder by day, problem-solver by night ☕
          </motion.p>

          {/* Bio Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            Java Backend Developer specializing in building scalable applications with Spring Boot. 
            Passionate about clean code, API design, and solving complex backend challenges. 
            Currently exploring cloud technologies and microservices architecture.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="/Akhil_Santhosh-resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-gradient-purple-blue text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <FaDownload />
              Get Resume
            </a>
            <a
              href="mailto:connectwithakhilsanthosh@gmail.com"
              className="flex items-center gap-2 px-6 py-3 glass-effect text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
            >
              <FaEnvelope />
              Send Mail
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/Akhil-vk18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-3 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaGithub size={24} aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhil-santhosh-1b381228a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-3 glass-effect rounded-lg hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin size={24} aria-hidden="true" />
            </a>
          </motion.div>

          {/* Quote (mobile-only — shown below socials on small screens) */}
          {quote && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="lg:hidden mt-8 bg-accent-purple/5 border-l-4 border-accent-purple/50 rounded-r-lg px-5 py-4"
            >
              <FaQuoteLeft className="text-accent-purple text-base mb-2 opacity-60" aria-hidden="true" />
              <p className="text-gray-300 text-sm italic leading-relaxed mb-2">{quote.text}</p>
              <p className="text-accent-purple text-xs font-mono">— {quote.author}</p>
            </motion.div>
          )}
        </div>

        {/* ── Right column (2/5) — Quote card, desktop only ── */}
        {quote && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="hidden lg:flex lg:col-span-2 flex-col justify-center"
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-accent-purple/20 rounded-2xl p-8 shadow-glow">
              {/* Large decorative quote mark */}
              <FaQuoteLeft className="text-accent-purple text-5xl opacity-20 mb-4" aria-hidden="true" />
              <p className="text-gray-200 text-base italic leading-relaxed mb-6">
                {quote.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-accent-purple/30" />
                <p className="text-accent-purple text-sm font-mono font-semibold">{quote.author}</p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Introduction;
