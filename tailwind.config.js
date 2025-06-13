module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
  // Clases personalizadas usadas en el fondo del agujero negro
  'mask-blackhole',
  'mix-blend-screen',
  'mix-blend-overlay',
  'z-[-1]',
  'z-[-2]',
  'z-[-5]',
  'text-white',
],

  theme: {
    extend: {
      fontFamily: {
        cedarville: ['var(--font-cedarville)', 'cursive'],
      },
    },
  },
  plugins: [],
};
