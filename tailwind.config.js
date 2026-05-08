/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          primary: "#000000"
        },
        secondary: {
          blue: "#377DFF",
          green: "#38CB89",
          orange: "#FFAB00",
          red: "#FF5630"
        },
        gray: {
          900: "#141718",
          800: "#232627",
          700: "#343839",
          500: "#6C7275",
          200: "#E8ECEF",
          100: "#F3F5F7",
          50: "#FEFEFE",
  }
      },
      fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
}