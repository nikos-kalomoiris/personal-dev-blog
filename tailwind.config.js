module.exports = {
  darkMode: "class", // or 'media' or 'class'
  safelist: [
    "bg-react",
    "bg-vue",
    "bg-javascript",
    "bg-blockchain",
    "bg-default",
    "bg-purple-400",
    "bg-git",
    "bg-javascript-dark",
    "bg-react-dark",
    "bg-vue-dark",
    "bg-blockchain-dark",
    "bg-git-dark",
  ],
  content: [
    //React
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    //Other static file
    "./static/**/*.{html}",

    //template engine
    "./views/**/*.{html,pub,ejs}",

    "add your path here...",
  ],
  theme: {
    extend: {
      colors: {
        default: "#4c4c4c",
        react: "#61DAFB",
        "react-dark": "#282c34",
        vue: "#42B983",
        "vue-dark": "#35495e",
        javascript: "#FCDC00",
        "javascript-dark": "#000000",
        blockchain: "#000000",
        "blockchain-dark": "#FFFFFF",
        git: "#F05032",
        "git-dark": "#F7DF1E",
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
  plugins: [],
};
