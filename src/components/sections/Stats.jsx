import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaMapMarkerAlt, FaBriefcase, FaEye, FaHeart } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { label: "Total Views", value: "1,234", icon: FaEye, color: "#8B5CF6" },
    { label: "Appreciation", value: "567", icon: FaHeart, color: "#EC4899" },
    { label: "Public Repos", value: "15+", icon: FaGithub, color: "#3B82F6" },
    { label: "Followers", value: "89", icon: FaGithub, color: "#06B6D4" },
  ];

  const profileInfo = [
    { label: "Location", value: "Kerala, India", icon: FaMapMarkerAlt },
    { label: "Status", value: "Hireable ✓", icon: FaBriefcase },
    { label: "GitHub", value: "@Akhil-vk18", icon: FaGithub },
  ];

  return (
    <section id="stats" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-purple-blue bg-clip-text text-transparent">
            Developer Stats
          </h2>
          <p className="text-xl text-gray-400 font-mono">
            {"// Analytics dashboard"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 hover:shadow-glow transition-all duration-300"
              >
                <Icon className="text-3xl mb-3" style={{ color: stat.color }} />
                <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Contribution Heatmap Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-effect rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">GitHub Contributions</h3>
          <div className="grid grid-cols-52 gap-1">
            {[...Array(365)].map((_, i) => {
              const intensity = Math.floor(Math.random() * 5);
              const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
              return (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: colors[intensity] }}
                  title={`${intensity} contributions`}
                ></div>
              );
            })}
          </div>
        </motion.div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {profileInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-effect rounded-xl p-4 flex items-center gap-3"
              >
                <Icon className="text-accent-purple text-xl" />
                <div>
                  <p className="text-xs text-gray-400">{info.label}</p>
                  <p className="text-sm text-white font-medium">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
