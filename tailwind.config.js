module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.{js, jsx, ts, tsx}"

  ],
  theme: {
    extend: {
      colors: {
        "primary": "#42fd",
        "secondary": "#4e5d78",
        "darkPrimary": "#191c21",
        "darkSecondary": "#212833"

      },
      backgroundColor: {
        "primary": "#42fd",
        "secondary": "#4e5d78",
        "darkPrimary": "#191c21",
        "darkSecondary": "#212833"
      }
    },
    fontFamily: {
      'awesome': ['Font Awesome 5 Free', 'sans-serif'],
    }
  },
  plugins: [
    // require('flowbite/plugin')

  ],
}
