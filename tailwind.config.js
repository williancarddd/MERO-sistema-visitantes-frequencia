/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      museu_standard: "#e18441",
      museu_variante1: "#d57135",
      }
    },
  },
  plugins: [],
}