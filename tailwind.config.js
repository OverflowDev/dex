/** @type {import('tailwindcss').Config} */ 

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
        barlow: ["Barlow", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}