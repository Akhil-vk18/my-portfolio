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

        {/* GitHub Activity — Space Shooter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 mb-8"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">GitHub Activity</h3>
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
              src={`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_USERNAME}/output/github-contribution-grid-snake.gif`}
              alt="GitHub contribution activity as space shooter"
              className="rounded-md max-w-full"
              style={{ imageRendering: 'pixelated' }}
            />
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
  const [contributions, setContributions] = useState([]);
  const [contributionsLoading, setContributionsLoading] = useState(true);

  // GitHub contribution colors — Spring Boot green palette
  const CONTRIBUTION_COLORS = ['#0E1A0F', '#1a3a1c', '#2d6b30', '#4e9e52', '#6DB33F'];
  
  // Grid dimensions
  const CELL_SIZE = 10; // px
  const CELL_GAP = 3; // px
  const DAYS_PER_WEEK = 7;
  const GRID_HEIGHT = DAYS_PER_WEEK * CELL_SIZE + (DAYS_PER_WEEK - 1) * CELL_GAP; // 88px

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
        // Keep loading false to show fallback values
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const currentYear = new Date().getFullYear();
        const prevYear = currentYear - 1;

        // Fetch both current and previous year in parallel so the heatmap
        // covers the full last-52-weeks window regardless of year boundary
        const [resCurrent, resPrev] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${currentYear}`),
          fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${prevYear}`),
        ]);

        const merged = [];

        if (resPrev.ok) {
          const dataPrev = await resPrev.json();
          if (dataPrev.contributions) merged.push(...dataPrev.contributions);
        }

        if (resCurrent.ok) {
          const dataCurrent = await resCurrent.json();
          if (dataCurrent.contributions) merged.push(...dataCurrent.contributions);
        }

        if (merged.length > 0) {
          setContributions(merged);
        }
        setContributionsLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error.message || error);
        setContributionsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  // Helper function to get contribution intensity for a specific date
  const getContributionIntensity = (weekIndex, dayIndex) => {
    if (contributionsLoading || contributions.length === 0) {
      // Show fallback pattern while loading or if data unavailable
      let intensity = 0;
      if (dayIndex >= 1 && dayIndex <= 5) {
        intensity = Math.floor(Math.random() * 5);
      } else {
        intensity = Math.floor(Math.random() * 3);
      }
      if (weekIndex % 4 === 0) intensity = Math.min(4, intensity + 1);
      if (weekIndex > 45) intensity = Math.min(4, intensity + 1);
      return { intensity, count: intensity * Math.floor(Math.random() * 3 + 1) };
    }

    // Calculate the date for this cell
    const today = new Date();
    const startOfGraph = new Date(today);
    startOfGraph.setDate(today.getDate() - 364); // Go back ~52 weeks
    
    // Adjust to start on Sunday
    const dayOfWeek = startOfGraph.getDay();
    startOfGraph.setDate(startOfGraph.getDate() - dayOfWeek);
    
    // Calculate the specific date for this cell
    const cellDate = new Date(startOfGraph);
    cellDate.setDate(startOfGraph.getDate() + (weekIndex * 7) + dayIndex);
    
    // Format date as YYYY-MM-DD
    const dateStr = cellDate.toISOString().split('T')[0];
    
    // Find contribution for this date
    const contribution = contributions.find(c => c.date === dateStr);
    const count = contribution ? contribution.count : 0;
    
    // Map count to intensity level (0-4)
    let intensity = 0;
    if (count > 0 && count <= 3) intensity = 1;
    else if (count <= 6) intensity = 2;
    else if (count <= 9) intensity = 3;
    else if (count > 9) intensity = 4;
    
    return { intensity, count };
  };

  const stats = [
    { label: "Total Stars", value: loading ? "..." : githubStats.totalStars, icon: FaStar, color: "#F59E0B" },
    { label: "Total Forks", value: loading ? "..." : githubStats.totalForks, icon: FaCodeBranch, color: "#6DB33F" },
    { label: "Public Repos", value: loading ? "..." : githubStats.publicRepos, icon: FaGithub, color: "#34D058" },
    { label: "Followers", value: loading ? "..." : githubStats.followers, icon: FaCode, color: "#86C26B" },
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">GitHub Contributions</h3>
            <span className="text-xs text-gray-500">Last year</span>
          </div>
          
          {/* Contribution Graph */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Month labels */}
              <div className="flex mb-1 ml-8">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                  <div
                    key={month}
                    className="text-xs text-gray-500"
                    style={{
                      width: `${(100 / 12)}%`,
                      textAlign: 'left',
                    }}
                  >
                    {month}
                  </div>
                ))}
              </div>
              
              {/* Graph with day labels */}
              <div className="flex">
                {/* Day labels */}
                <div className="flex flex-col justify-between pr-2 text-xs text-gray-500" style={{ height: `${GRID_HEIGHT}px` }}>
                  <div style={{ lineHeight: '10px' }}>Mon</div>
                  <div style={{ lineHeight: '10px' }}>Wed</div>
                  <div style={{ lineHeight: '10px' }}>Fri</div>
                </div>
                
                {/* Contribution grid - organized by weeks */}
                <div className="flex gap-[3px]">
                  {[...Array(53)].map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {[...Array(7)].map((_, dayIndex) => {
                        const { intensity, count } = getContributionIntensity(weekIndex, dayIndex);
                        
                        return (
                          <div
                            key={dayIndex}
                            className="w-[10px] h-[10px] rounded-sm hover:ring-1 hover:ring-white/50 transition-all cursor-pointer"
                            style={{ backgroundColor: CONTRIBUTION_COLORS[intensity] }}
                            title={contributionsLoading ? 'Loading...' : `${count} contribution${count !== 1 ? 's' : ''}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-end gap-2 mt-3 text-xs text-gray-500">
                <span>Less</span>
                <div className="flex gap-1">
                  {CONTRIBUTION_COLORS.map((color, i) => (
                    <div
                      key={i}
                      className="w-[10px] h-[10px] rounded-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
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
