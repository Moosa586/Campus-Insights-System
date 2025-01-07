/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["'Poppins'", "sans-serif"], // Example custom font
        heading: ["'Roboto Condensed'", "sans-serif"], // Another example
        custom2: ["Montserrat", "sans-serif"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
