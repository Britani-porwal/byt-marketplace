/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#6947e2',
        dark: '#4727b9',
        light: '#6947E2',
        'dark-grey': '#0E0628',
        'light-purple': '#E7E9FF',
        'off-white': '#A49EBC'
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans]
      },
      boxShadow: {
        custom: '0px 4px 12px 0px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
}
