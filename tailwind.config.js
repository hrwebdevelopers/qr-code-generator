/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [,
    './src/index.html',
    "./src/**/*.{html,js}"
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
