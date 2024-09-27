/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleRoyal: '#7732CA',
        sunsetOrange: '#F07950',
        orchidPurple: '#9D48A3',
        roseRed: '#D1676E',
      },
    },
  },
  plugins: [],
}
