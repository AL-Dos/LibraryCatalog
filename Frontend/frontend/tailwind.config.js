/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ["Raleway", 'sans-serif'],
        'play': ["Playfair Display", 'serif'],
        'dm': ["DM Sans", 'sans-serif'],
        'bebas': ["Bebas Neue", 'sans-serif'],
      },
      colors: {
        light: '#F3F1E9',
        dark:'#D0CCC0'
      },
    },
  },
  plugins: [],
}