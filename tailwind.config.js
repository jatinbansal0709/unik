/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unik-red': '#D32F2F',
        'unik-black': '#000000',
        'unik-gold': '#d6b06a',
        'unik-grey': '#333333',
        'unik-dark-grey': '#1a1a1a',
        'unik-light-grey': '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
