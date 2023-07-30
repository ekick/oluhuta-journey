/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '130': '38rem',
        '132': '44rem',
        '134': '48rem',
        '136': '52rem',
        '138': '56rem',
        '30': '7.5rem',
        '94': '23rem',
        '68': '17rem'
      },
      fontSize: {
        'pk': '0.7rem',
        'sk': '0.6rem',
        
      },
      colors: {
        "splashscreen":"#FFC700"
      },
      animation:{
        'spin-slow':'spin 3s linear infinite'
      },
      backgroundImage: {
        'image-splash-bg' : "url('/src/assets/backk.jpg')",
        'image-homel-bg' : "url('/src/assets/back1.jpg')",
        'imageback' : "url('/src/assets/back3.jpg')",
        'backhome' : "url('/src/assets/backhome.jpg')",
      }
    },
    fontFamily: {
      abc: ["Poppins"],
      cde: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
}

