/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true
    },
    extend: {
      colors:{
        'brand-color':'#62FFB4'
      }
    },
    fontFamily:{
      'Poppins':["Poppins", 'serif']
    }
  },
  plugins: [],
}