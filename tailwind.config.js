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
    },
  }, daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [daisyui],
}