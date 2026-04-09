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
          bg: '#080F09',
          card: '#0E1A0F',
          border: '#1A2E1C',
        },
        accent: {
          purple: '#6DB33F',
          blue: '#34D058',
          cyan: '#86C26B',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple-blue': 'linear-gradient(135deg, #4e8c2b 0%, #6DB33F 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(109, 179, 63, 0.4)',
        'glow-blue': '0 0 20px rgba(52, 208, 88, 0.3)',
      }
    },
  },
  plugins: [],
}
