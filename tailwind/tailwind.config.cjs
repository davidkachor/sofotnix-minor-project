/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      main: '#FF868E',
      common: '#FBE0DC',
      layout: '#F8F8F7',
      contrast: '#1D1D1D',
      pale: '#8C8C8C',
      'yellow-shade': '#FFD280',
      'green-shade': '#97EAB9',
      'purple-shade': '#B4B7FF'
    },
    fontFamily: {
      jost: ['Jost', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
