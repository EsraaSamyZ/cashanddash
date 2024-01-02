/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '1rem',  // Example of customizing an existing size
        'sm': '1.125rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.875rem',
        '3xl': '2.25rem',
        '4xl': '3rem',
        '5xl': '4rem',
        '6xl': '5rem',
        '7xl': '5rem',
        // Add more custom sizes as needed
      },
      fontWeight: {
        'thin': 600,
        'extralight': 600,
        'light': 600,
        'base': 600,
        'normal': 600,
        'medium': 700,
        'semibold': 800,
        'bold': 900,
        'extrabold': 900,
        'black': 900,
      },
      colors: {
        "deep-crimson": "#D11142", 
        "royal-blue": "#385CAD",  
        "midnight-blue": "#09183B",
        "dark-blue": "#193163", 
        "light-gray": "#F4F4F4", 
        "dark-gray": "#3E3E3E",
      },
      fontFamily: {
        sans: ["Avenir Next Pro", "Helvetica", "Arial", "sans-serif"],
        "serif": ["Georgia", "Times New Roman", "serif"],
      },
      boxShadow: {
        "custom": "2px 6px 15px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animated")
  ],
}
