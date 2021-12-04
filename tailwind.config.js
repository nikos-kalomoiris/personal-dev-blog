const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': '100px',
      sm: '478px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
