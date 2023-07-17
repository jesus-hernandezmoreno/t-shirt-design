/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        joystix: ['Joystix', 'san-serif'],
        pixelate: ['SF Pixelate', 'san-serif']
      }
    }
  },
  plugins: []
};
