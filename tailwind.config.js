/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
         primary:'#ff2526',
         light: '#e9e7e7',
         size:'9px',
      }
    },
  },
  plugins: [],
}
