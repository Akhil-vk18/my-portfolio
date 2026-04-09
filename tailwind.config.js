/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0D0D1A',
          card: '#141428',
          border: '#252545',
        },
        accent: {
          purple: '#6366F1',
          blue: '#60A5FA',
          cyan: '#22D3EE',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple-blue': 'linear-gradient(135deg, #6366F1 0%, #60A5FA 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-blue': '0 0 20px rgba(96, 165, 250, 0.3)',
      }
    },
  },
  plugins: [],
}
