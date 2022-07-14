/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/**/*.html"

  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-header': "url(/img/bg-header.png)"
      },

      fontFamily: {
        'poppins': ['Poppins']
      }
    },
  },
  plugins: [],
}
