module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      hideScrollbar: {
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        'scrollbar-width': 'none',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#11191f',
        'light-blue': '#1f2a36',
        'opposite' : '#eee6e0',
        'm-blue' : '#112955',
        'm-blue2' : '#183977',
      },
  variants: {
    extend: {},
  },
  plugins: [],
}
  }
};