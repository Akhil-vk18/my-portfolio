import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaMapMarkerAlt, FaBriefcase, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const Stats = () => {
  // GitHub username configuration
  const GITHUB_USERNAME = 'Akhil-vk18';
  
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
        // Fetch user data and repos in parallel for faster loading
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
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
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  const stats = [
    { label: "Total Stars", value: loading ? "..." : githubStats.totalStars, icon: FaStar, color: "#F59E0B" },
    { label: "Total Forks", value: loading ? "..." : githubStats.totalForks, icon: FaCodeBranch, color: "#8B5CF6" },
    { label: "Public Repos", value: loading ? "..." : githubStats.publicRepos, icon: FaGithub, color: "#3B82F6" },
    { label: "Followers", value: loading ? "..." : githubStats.followers, icon: FaCode, color: "#06B6D4" },
  ];

  const profileInfo = [
    { label: "Location", value: "Kerala, India", icon: FaMapMarkerAlt },
    { label: "Status", value: "Hireable ✓", icon: FaBriefcase },
    { label: "GitHub", value: "@Akhil-vk18", icon: FaGithub },
  ];

  // github-readme-stats theme params
  const statsCardUrl =
    `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}` +
    `&show_icons=true&theme=github_dark_dimmed&hide_border=true&count_private=true&include_all_commits=true`;

  const topLangsUrl =
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}` +
    `&layout=compact&theme=github_dark_dimmed&hide_border=true&langs_count=8`;

  const streakUrl =
    `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}` +
    `&theme=github-dark-blue&hide_border=true`;

  return (
    <section id="stats" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <SiSpringboot className="text-4xl text-accent-purple" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent">
              Developer Stats
            </h2>
          </div>
          <p className="text-xl text-gray-400 font-mono">
            {"// GitHub analytics dashboard"}
          </p>
        </motion.div>

        {/* Live stat counter cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
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

        {/* GitHub Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.3 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">GitHub Streak</h3>
          <div className="flex justify-center overflow-x-auto">
            <img
              src={streakUrl}
              alt="GitHub contribution streak"
              className="rounded-md max-w-full"
              width="600"
              height="150"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Stats card + Top Languages side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">GitHub Stats</h3>
            <div className="flex justify-center overflow-x-auto">
              <img
                src={statsCardUrl}
                alt="GitHub stats card"
                className="rounded-md max-w-full"
                width="495"
                height="195"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Top Languages</h3>
            <div className="flex justify-center overflow-x-auto">
              <img
                src={topLangsUrl}
                alt="Top programming languages"
                className="rounded-md max-w-full"
                width="495"
                height="195"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* GitHub Contribution Activity Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Contribution Activity</h3>
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-accent-purple transition-colors"
            >
              View on GitHub →
            </a>
          </div>
          <div className="overflow-x-auto flex justify-center">
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=0d1117&color=8b5cf6&line=8b5cf6&point=c084fc&area=true&area_color=1a0a2e&hide_border=true`}
              alt="GitHub contribution activity graph"
              className="rounded-md max-w-full"
              width="900"
              height="300"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {profileInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
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

