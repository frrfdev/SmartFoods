/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        slidedown: "slideDown 0.3s ease-out",
        slideup: "slideUp 0.3s ease-out",
        fadein: "fadeIn 0.3s ease-out",
        fadeout: "fadeOut 0.3s ease-out",
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
