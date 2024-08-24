/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        body :["Helvetica", "sans-serif"],
        title :["Avenir", "sans-serif"]
      },
      colors:{
        button :"#9C69E2",
        primarylogo :"#F063B8",
        secondary : "#212353",
        para :"#4B5D68"
      },
      animation: {
        'fade-left': 'fadeLeft 1s ease-out',
      },
      keyframes: {
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animate-delay-1000': {
          'animation-delay': '10s',
        },
      }, ['responsive', 'hover']);
    },
  ],
}

