import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import useRandomQuote from '../hooks/useRandomQuote';

const SplashScreen = ({ onComplete }) => {
  const { quote, isLoading } = useRandomQuote();
  const [phase, setPhase] = useState('loading'); // 'loading' | 'showing' | 'exiting'

  // Transition to 'showing' once the quote is ready
  useEffect(() => {
    if (!isLoading && quote && phase === 'loading') {
      setPhase('showing');
    }
  }, [isLoading, quote, phase]);

  // Auto-advance after enough time for the quote animation + reading buffer
  useEffect(() => {
    if (phase !== 'showing' || !quote) return;
    const words = quote.text.split(' ');
    // delay until last word + author appear + 2 s reading time, minimum 4 s
    const autoDelay = Math.max(4000, words.length * 70 + 2500);
    const timer = setTimeout(() => setPhase('exiting'), autoDelay);
    return () => clearTimeout(timer);
  }, [phase, quote]);

  // Allow skip at any phase (loading or showing)
  const triggerExit = () => {
    if (phase !== 'exiting') setPhase('exiting');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      triggerExit();
    }
  };

  const words = quote ? quote.text.split(' ') : [];
  // delay offset so author appears after all words
  const authorDelay = 0.4 + words.length * 0.07 + 0.3;

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== 'exiting' && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, #1e0a3c 0%, #0d0d1a 60%, #000 100%)',
          }}
          onClick={triggerExit}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Loading screen — click or press Enter, Space, or Escape to skip"
        >
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.4) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />
          </div>

          {/* Pulsing purple glow orb */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          {/* ── Loading spinner ── */}
          {phase === 'loading' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 rounded-full border-2 border-accent-purple/20 border-t-accent-purple"
              />
              <p className="text-gray-500 font-mono text-xs tracking-widest uppercase">
                Loading quote…
              </p>
            </motion.div>
          )}

          {/* ── Quote display ── */}
          {phase === 'showing' && quote && (
            <div className="relative max-w-2xl mx-auto px-8 text-center">
              {/* Big decorative opening quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
                className="mb-6"
                aria-hidden="true"
              >
                <FaQuoteLeft className="text-7xl md:text-9xl text-accent-purple/20 mx-auto" />
              </motion.div>

              {/* Quote text — word-by-word reveal */}
              <p
                className="text-xl md:text-3xl font-light text-white leading-relaxed mb-8"
                aria-live="polite"
              >
                {words.map((word, i) => (
                  <motion.span
                    key={`${word}-${i}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: authorDelay, duration: 0.5, ease: 'easeOut' }}
                className="flex items-center justify-center gap-3"
              >
                <div className="h-px w-10 bg-accent-purple/40" aria-hidden="true" />
                <p className="text-accent-purple font-mono text-sm md:text-base">
                  — {quote.author}
                </p>
                <div className="h-px w-10 bg-accent-purple/40" aria-hidden="true" />
              </motion.div>

              {/* "Click anywhere" hint — pulses after quote is done */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.55, 0] }}
                transition={{ delay: authorDelay + 0.8, duration: 2, repeat: Infinity }}
                className="mt-12 text-gray-500 text-xs font-mono tracking-[0.25em] uppercase"
                aria-hidden="true"
              >
                Click anywhere to continue
              </motion.p>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
