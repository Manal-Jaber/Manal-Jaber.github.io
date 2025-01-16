/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ticker: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wobble: {
          "0%": {
            transform: "translate(0px, -30px)", // top
          },
          "25%": {
            transform: "translate(30px, 0px)", // right
          },
          "50%": {
            transform: "translate(0px, 30px)", // bottom
          },
          "75%": {
            transform: "translate(-30px, 0px)", // left
          },
          "100%": {
            transform: "translate(0px, -30px)", // back to top
          },
        },
      },
      animation: {
        ticker: "ticker 1s ease-in-out infinite",
        wobble: "wobble 3s linear infinite",
      },
      colors: {
        background: "#11071F",
        header: "#1A0B2E",
        white: "#FFFFFF",
        purple: "#7127BA",
      },
    },
    fontFamily: {
      Preahvihear: ["Preahvihear", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
