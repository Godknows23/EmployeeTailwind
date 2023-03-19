/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
     "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      colors: {
        'black': '#0B0D26',
        'orange': '#F2441D',
        'blue': '#1D79F2',
        'gray-dark': '#434459',
        'gray-light': '#F5F5F5',
        'gray': '#CCCCCC',
        'red': '#F2441D',
        "white": "#ffffff"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      extend: {
        height: {
          '1/3': '600px',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        boxShadow:{
          "xl": "0 7px 29px 0 rgba(100, 100, 111, 0.2)"
        }
      }
    },
  plugins: [],
}