/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(3 7 18)",
      },
      fontFamily: {
        primary: ['Kollektif', 'sans-serif']
      },
      colors: {
        secondary: "#CC5500"
      }
    },
  },
  plugins: [
     function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
  ],
}