// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
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
