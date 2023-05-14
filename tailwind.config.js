/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#396C03',
        secondary: '#676767',
        basic: "#3F3F3F"
      },
      fontSize: {
        '65': "65px",
        '50': "50px",
      }
    },
  },
  plugins: [],
}

