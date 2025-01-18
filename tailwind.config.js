const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        norse: ["Norse", "sans-serif"],
      },
      extend: {},
    },
    plugins: [],
  }