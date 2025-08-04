/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-green': '#4ade80',
        'dark-gray': '#1a1a1a',
        'warm-yellow': '#fbbf24',
        'teal': '#0d9488',
        'mustard': '#d97706',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
} 