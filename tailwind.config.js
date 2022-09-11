const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: {
    safelist: [
      "bg-react",
      "bg-vue",
      "bg-javascript",
      "bg-blockchain",
      "bg-default",
      "bg-purple-400",
      "bg-git",
    ],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        default: "#4c4c4c",
        react: "#61DAFB",
        vue: "#42B983",
        javascript: "#FCDC00",
        blockchain: "#000000",
        git: "#F05032",
      },
      fontFamily: {
        montserrat: ["Ubuntu"],
      },
    },
    screens: {
      xs: "100px",
      sm: "478px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
