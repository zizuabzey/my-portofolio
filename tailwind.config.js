/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#050816",
        // primary: "#010204",
        primary: "#000000",
        // secondary: "#aaa6c3",
        secondary: "#F5F5F5",
        // tertiary: "#151030",
        // tertiary: "#2b5569",
        // tertiary: "#AF1740",
        tertiary: "#C40C0C",
        hoverTertiary: "#000000",
        // "black-100": "#100d25",
        // "black-100": "#0C7B93", 
        "black-100": "#AF1740", 
        // "black-200": "#090325",
        // "black-200": "#007074",
        "black-200": "#CC2B52",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        // card: "0px 35px 120px -15px #211e35",
        // card: "0px 35px 120px -15px #2CD3E1",
        card: "0px 35px 120px -15px #C40C0C",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.webp')",
      },
    },
  },
  plugins: [],
};