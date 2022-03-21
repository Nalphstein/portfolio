module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        'body':'#17171F'
      },
      backgroundImage: {
        'fields': "url:('./src/Images/pexels-cottonbro-9667561.jpg')",
      },
      fontFamily:{
        'poppins':["'Poppins'",'sans-serif']
      }
    },
  },
  plugins: [],
}
