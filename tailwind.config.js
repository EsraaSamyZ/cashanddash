/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-crimson': '#D11142', 
        'royal-blue': '#385CAD',  
        'midnight-blue': '#09183B',
        'dark-blue': '#193163', 
        'light-gray': '#F4F4F4', 
        'dark-gray': '#3E3E3E',
      },
      fontFamily: {
        sans: ['Avenir Next Pro', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'custom': '2px 6px 15px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
