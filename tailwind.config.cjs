/** @type {import('tailwindcss').Config} */
module.exports = {
  important: ['#app'],
  content: [,
    "./index.html",
    "./src/assets/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
