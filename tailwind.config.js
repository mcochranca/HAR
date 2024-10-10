// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }, // Example fade in animation 
      colors: {
        primary: '#2563eb', // Custom primary color
        secondary: '#1e293b', // Custom secondary color
        accent: '#22c55e', // Custom accent color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use Inter font
      },
    },
  },
  plugins: [],
};
