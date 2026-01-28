/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          dark: '#0B1120', // Deep Navy
          primary: '#1e293b', // Slate 800
          accent: '#f59e0b', // Amber 500
          gold: '#D4AF37',
          light: '#f8fafc',
        }
      }
    }
  },
  plugins: [],
}