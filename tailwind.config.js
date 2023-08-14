/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue-primary': '#1E255E',
        'blue-secondary': '#3C4EF3',
      },
    },
  },
  plugins: [],
};
