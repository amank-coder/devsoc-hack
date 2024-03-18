/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('https://img.freepik.com/free-vector/wavy-background-concept_23-2148497712.jpg')",
      },
    },
  },
  plugins: [],
}
