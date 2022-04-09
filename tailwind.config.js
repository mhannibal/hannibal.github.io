module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Quicksand', 'sans-serif',],            
      'title': ['Anton', ],
    },
    colors: {
      secondary: {
        200:'#25262d',
        100:'#4e7791',
      },
      white : {
        100: '#FFFFFF',
      },
      gray : {
        100: '#3e3e3e ',
      },
      black : {
        100: '#000000',
      },
    }
  },
  plugins: [],
}
