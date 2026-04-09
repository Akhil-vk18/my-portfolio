import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

// To enable direct email sending:
// 1. Go to https://web3forms.com and enter your email to get a free access key
// 2. Replace the value below with your access key
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

const ContactNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio contact from ${formData.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <SiSpringboot className="text-4xl text-accent-purple" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
              Contact Me
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            {"// Let's connect"}
          </p>
        </motion.div>

        {/* Success message */}
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 mb-6 bg-accent-purple/10 border border-accent-purple/30 rounded-lg text-accent-purple"
          >
            <FaCheckCircle className="text-xl shrink-0" />
            <p className="text-sm font-medium">Message sent! I'll get back to you within 24 hours.</p>
          </motion.div>
        )}

        {/* Error message */}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 mb-6 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
          >
            <FaExclamationCircle className="text-xl shrink-0" />
            <p className="text-sm font-medium">Failed to send. Please try again or email directly at <a href="mailto:connectwithakhilsanthosh@gmail.com" className="underline">connectwithakhilsanthosh@gmail.com</a></p>
          </motion.div>
        )}

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all disabled:opacity-60"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all disabled:opacity-60"
              placeholder="your.email@example.com"
            />
            <p className="text-xs text-gray-500 mt-1">I'll get back to you within 24 hours</p>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              disabled={status === 'loading'}
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none disabled:opacity-60"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-purple-blue text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <FaPaperPlane className={status === 'loading' ? 'animate-pulse' : ''} />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            <button
              type="button"
              onClick={handleReset}
              disabled={status === 'loading'}
              className="px-6 py-3 glass-effect text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300 disabled:opacity-60"
            >
              Reset
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactNew;
