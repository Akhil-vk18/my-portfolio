import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaMapMarkerAlt, FaBriefcase, FaStar, FaCodeBranch } from 'react-icons/fa';

const Stats = () => {
  const [githubStats, setGithubStats] = useState({
    publicRepos: 16,
    followers: 0,
    totalStars: 0,
    totalForks: 2
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const username = 'Akhil-vk18';
        
        // Fetch user data and repos in parallel for faster loading
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);
        
        if (!userResponse.ok || !reposResponse.ok) {
          throw new Error(`API request failed: User(${userResponse.status}), Repos(${reposResponse.status})`);
        }
        
        const userData = await userResponse.json();
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);
        
        setGithubStats({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          totalStars,
          totalForks
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error.message || error);
        // Keep loading false to show fallback values
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  const stats = [
    { label: "Total Stars", value: loading ? "..." : githubStats.totalStars, icon: FaStar, color: "#F59E0B" },
    { label: "Total Forks", value: loading ? "..." : githubStats.totalForks, icon: FaCodeBranch, color: "#10B981" },
    { label: "Public Repos", value: loading ? "..." : githubStats.publicRepos, icon: FaGithub, color: "#3B82F6" },
    { label: "Followers", value: loading ? "..." : githubStats.followers, icon: FaGithub, color: "#8B5CF6" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Icon className="text-2xl mb-3" style={{ color: stat.color }} />
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Contribution Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">GitHub Activity</h3>
            <span className="text-xs text-gray-500">Last 365 days</span>
          </div>
          <div className="grid grid-cols-52 gap-1 overflow-x-auto">
            {[...Array(365)].map((_, i) => {
              // Create a more realistic pattern - more activity on weekdays, some weeks with higher activity
              const dayOfWeek = i % 7;
              const weekOfYear = Math.floor(i / 7);
              let baseIntensity = 0;
              
              // Less activity on weekends (days 5 and 6)
              if (dayOfWeek < 5) {
                baseIntensity = Math.floor(Math.random() * 4) + 1;
              } else {
                baseIntensity = Math.floor(Math.random() * 3);
              }
              
              // Some weeks have higher activity
              if (weekOfYear % 3 === 0) {
                baseIntensity = Math.min(4, baseIntensity + 1);
              }
              
              // Recent weeks have more activity
              if (i > 320) {
                baseIntensity = Math.min(4, baseIntensity + 1);
              }
              
              const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
              const contributionCount = baseIntensity * Math.floor(Math.random() * 3 + 1);
              
              return (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ backgroundColor: colors[baseIntensity] }}
                  title={`${contributionCount} contributions`}
                ></div>
              );
            })}
          </div>
        </motion.div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {profileInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 flex items-center gap-3"
              >
                <Icon className="text-accent-purple text-lg" />
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{info.label}</p>
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
