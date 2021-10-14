module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    width: {
      '1/2-screen': '50vw',
      'screen': '90vw',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#E2FCEF',
      secondary: '#100B00',
      tertiary: '#AD5D4E',
      accent: '#5C164E',
    }),
    borderColor: theme => ({
      ...theme('colors'),
      primary: '#E2FCEF',
      secondary: '#100B00',
      tertiary: '#AD5D4E',
      accent: '#FFB400',
      light: '#5C164E'
    }),
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        zoo: ['ZCOOL KuaiLe', 'cursive']
      },
      textColor: {
        white: '#E2FCEF',
        black: '#100B00',
        highlight: '#5C164E',
        yellow: '#FFB400',
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
