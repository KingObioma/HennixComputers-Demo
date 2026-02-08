/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hennix: {
          orange: '#E8792A',
          'orange-light': '#F59E4B',
          'orange-dark': '#C9621A',
          black: '#111111',
          'dark': '#1A1A1A',
          'gray': '#2A2A2A',
          'gray-light': '#3A3A3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
