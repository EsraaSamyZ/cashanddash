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
      },
      fontFamily: {
        sans: ['Avenir Next Pro', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  variants: {
    // Configure the variants here
    // For example, you can enable 'disabled' or 'visited' variants for certain utilities
    extend: {},
  },
  plugins: [
    // Add any Tailwind plugins you wish to use here
    // For example: require('@tailwindcss/forms'),
  ],
}
