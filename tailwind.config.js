module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        ticker: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        ticker: 'ticker 1.2s ease-in-out infinite',
      },
    },
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
