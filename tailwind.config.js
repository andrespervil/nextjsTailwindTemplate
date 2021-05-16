/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/components/**/*.jsx',
    './src/components/*.jsx',
    './src/pages/**/*.jsx',
    './src/pages/*.jsx',
    './src/layout/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')]
};
