/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blue: "#5E78FB",
        gray: "#a0a5a8",
        pink: "#F94754",
        beige: "beige",
        "dark-blue": "#1B275B",
        "sky-blue": "#0AB7FA",
        "light-faded-color": "#8F97B6",
        "fade-color": "#707070",
        "back-color": "#EDF4FA",
        "neu-light": "#ecf0f3",
        "neu-dark": "#d1d9e6",
        "light-white": "#f9f9f9",
        "light-black": "#181818",
        "light-orange": "#fd9644",
        "purple-blue": "#4B70E2",
        "blue-hues": "#464493",
        "input-border": "#bfd1e3",
      },
      fontFamily:{
        lato:'lato',
        comic:'comic-neue',
        roboto:'Roboto'
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
