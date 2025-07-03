/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': "Inter",
        'chakra': "Chakra Petch"
      },
      colors: {
        'mustard': '#d3a04d',
        'wood': '#a43c23',
        'yale-blue': '#134074',
        'berk-blue': '#13315C',
        'oxford-blue': '#0B2545',
        'powder-blue': '#8DA9C4',
        'mint-blue': '#EEF4ED',
        'pine-green': '#136F63',
        'auburn': '#A22C29',
        'russian-violet': '#47316E',
        'midnight': '#121212',
      },
      width: {
        'half': '50%',
        'mx-100': 'margin-left:30rem; margin-right:30rem',
        '30r': '30rem',
        '20r': '40rem',
        'w-150': '78rem',
      },
      height: {
        '90p': '90%'
      },
      spacing: {
        '100':'34rem'
      },
      margin: {
        '40r': '20rem',
      }
    },
  },
  plugins: [],
}
