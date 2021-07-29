module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#D4E09B',
        'secondary': '#ADB6FF'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
