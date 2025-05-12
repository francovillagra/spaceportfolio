module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sub/**/*.{js,ts,jsx,tsx}",       // <--- añadí esta línea
    "./sections/**/*.{js,ts,jsx,tsx}",  // <--- y esta si usás esa carpeta también
  ],
  theme: {
    extend: {
      fontFamily: {
        cedarville: ['var(--font-cedarville)', 'cursive'],
      },
    },
  },
}
