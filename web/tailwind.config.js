const brandColors = {
  richBlack: '#15202b',
  onix: '#333639',
  silver: '#71767b',
  platinum: '#E7E9EA',
  birdBlue: '#1d9bf0',
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...brandColors,
        backgroundColor: brandColors.richBlack,
        textColor: brandColors.platinum
      },
    },
  },
  plugins: [],
}