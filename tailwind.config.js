/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'], 
        playfair: ['Playfair Display', 'cursive'],
      },
      colors: {
        'primary': '#23BE0A',
        'secondary': '#59C6D2',
      },
    },
  }, daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [daisyui],
}