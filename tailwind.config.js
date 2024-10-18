module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      background: '#11071F',
      header: '#1A0B2E',
      white: '#FFFFFF',
      purple: '#7127BA',
    },
    fontFamily: {
      Preahvihear: ['Preahvihear', 'ui-sans-serif', 'system-ui'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
