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
      },
      animation: {
        ticker: "ticker 1.2s ease-in-out infinite",
      },
    },
    colors: {
      background: "#11071F",
      header: "#1A0B2E",
      white: "#FFFFFF",
      purple: "#7127BA",
    },
    fontFamily: {
      Preahvihear: ["Preahvihear", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [],
};
