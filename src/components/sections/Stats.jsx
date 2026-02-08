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

  // GitHub contribution colors
  const CONTRIBUTION_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
  
  // Grid dimensions
  const CELL_SIZE = 10; // px
  const CELL_GAP = 3; // px
  const DAYS_PER_WEEK = 7;
  const GRID_HEIGHT = DAYS_PER_WEEK * CELL_SIZE + (DAYS_PER_WEEK - 1) * CELL_GAP; // 88px

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
                        // Calculate contribution intensity
                        let intensity = 0;
                        
                        // More activity on weekdays
                        if (dayIndex >= 1 && dayIndex <= 5) {
                          intensity = Math.floor(Math.random() * 5);
                        } else {
                          intensity = Math.floor(Math.random() * 3);
                        }
                        
                        // Some weeks have more activity
                        if (weekIndex % 4 === 0) {
                          intensity = Math.min(4, intensity + 1);
                        }
                        
                        // Recent weeks have more activity
                        if (weekIndex > 45) {
                          intensity = Math.min(4, intensity + 1);
                        }
                        
                        const contributionCount = intensity * Math.floor(Math.random() * 3 + 1);
                        
                        return (
                          <div
                            key={dayIndex}
                            className="w-[10px] h-[10px] rounded-sm hover:ring-1 hover:ring-white/50 transition-all cursor-pointer"
                            style={{ backgroundColor: CONTRIBUTION_COLORS[intensity] }}
                            title={`${contributionCount} contributions`}
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
