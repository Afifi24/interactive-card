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
         darkViolet: '#21092F',
         grayeshViolet:'#8E8593',
         lightViolet:'#DEDDDF',
      },
      fontFamily:{
        space:['Space+Grotesk'],
        Montserrat:['Montserrat']
      }
    },
  },
  plugins: [],
}
