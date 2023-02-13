/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jost': "Jost"
      },
      colors: {
        'mustard': '#d3a04d',
        'wood': '#a43c23'
      },
      width: {
        'half': '50%'
      },
      height: {
        '90p': '90%'
      }
    },
  },
  plugins: [],
}
