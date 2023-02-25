/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slidedown: "slideDown 0.3s ease-out",
        slideup: "slideUp 0.3s ease-out",
      },
    },
    fontFamily: {
      openSans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["even"],
    },
  },
};
