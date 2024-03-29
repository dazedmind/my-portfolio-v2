/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': "Jost",
        'chakra': "Chakra Petch"
      },
      colors: {
        'mustard': '#d3a04d',
        'wood': '#a43c23'
      },
      width: {
        'half': '50%',
        'mx-100': 'margin-left:30rem; margin-right:30rem'
      },
      height: {
        '90p': '90%'
      },
      spacing: {
        '100':'34rem'
      }
    },
  },
  plugins: [],
}
