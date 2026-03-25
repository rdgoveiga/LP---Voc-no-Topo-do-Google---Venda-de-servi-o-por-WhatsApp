
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
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'scroll': 'scroll 1.5s infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(-5%)', 'animation-timing-function': 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'none', 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        }
      }
    }
  },
  plugins: [],
}
