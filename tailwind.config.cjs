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
        'chakra': "Chakra Petch",
        'satoshi': "Satoshi-Variable",
        'satoshi-italic': "Satoshi-VariableItalic",
        'satoshi-light': "Satoshi-Light",
        'satoshi-light-italic': "Satoshi-LightItalic",
        'satoshi-regular': "Satoshi-Regular",
        'satoshi-italic': "Satoshi-Italic",
        'satoshi-medium': "Satoshi-Medium",
        'satoshi-medium-italic': "Satoshi-MediumItalic",
        'satoshi-bold': "Satoshi-Bold",
        'satoshi-bold-italic': "Satoshi-BoldItalic",
        'satoshi-black': "Satoshi-Black",
        'satoshi-black-italic': "Satoshi-BlackItalic",
        'general-sans': "GeneralSans-Variable",
        'general-sans-italic': "GeneralSans-VariableItalic",
        'general-sans-light': "GeneralSans-Light",
        'general-sans-light-italic': "GeneralSans-LightItalic",
        'general-sans-regular': "GeneralSans-Regular",
        'general-sans-italic': "GeneralSans-Italic",
        'general-sans-medium': "GeneralSans-Medium",  
        'general-sans-medium-italic': "GeneralSans-MediumItalic",
        'general-sans-semibold': "GeneralSans-Semibold",
        'general-sans-semibold-italic': "GeneralSans-SemiboldItalic",
        'general-sans-bold': "GeneralSans-Bold",
        'general-sans-bold-italic': "GeneralSans-BoldItalic",
        'general-sans-extralight': "GeneralSans-Extralight",
      },
      colors: {
        // 'mustard': '#d3a04d',orig
        // 'mustard': '#1099F4',
        'mustard': '#CFF49E',
        // 'wood': '#A6E1FA',
        'wood': '#e4f8c8',
        // 'wood': '#a43c23', orig
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
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
