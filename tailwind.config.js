const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        react: '#61DAFB',
        vue: '#42B983',
        javascript: '#FCDC00'
      }
    },
    screens: {
      'xs': '100px',
      sm: '478px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'] 
    },
  },
  plugins: [],
}
