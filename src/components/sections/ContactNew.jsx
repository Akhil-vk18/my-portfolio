import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const ContactNew = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = `From: ${formData.name} <${formData.email}>\n\n${formData.message}`;
    const mailtoLink = `mailto:connectwithakhilsanthosh@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
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
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
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
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
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
              className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-purple-blue text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <FaPaperPlane />
              Send Message
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-3 glass-effect text-white rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
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

