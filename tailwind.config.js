module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "display" : ["Noto Sans","sans-serif"],
      "body" : ["Noto Sans","sans-serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}