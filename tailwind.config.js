/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brandColor' : '#17C2EC',
        'secondColor' : '#c4c4c41a',
        'thirdColor' : '#FFFFFF80' 

      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '35px',
      },
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}