
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ide: {
          bg: '#1e1e1e',
          sidebar: '#181818',
          activity: '#111111',
          titlebar: '#111111',
          statusbar: '#007acc',
          statusbg: '#111111',
          text: '#cccccc',
          muted: '#858585',
          border: '#2b2b2b',
          selection: '#264f78',
          highlight: '#2a2d2e',
          accent: '#ff2d9c', // The bright pink
          accentHover: '#ff5eb5',
          blue: '#3b82f6',
          green: '#4ade80',
          purple: '#a855f7',
          yellow: '#eab308',
          keyword: '#569cd6',
          string: '#ce9178',
          comment: '#6a9955',
          function: '#dcdcaa',
          variable: '#9cdcfe',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
