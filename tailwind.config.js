const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   
      screens: {
        'mini':'300px',
        'mobile':'400px',
        'flagship':'410px',
        'xs':'620px',
        ...defaultTheme.screens,
      
    },
    
  },
  plugins: [],
}
