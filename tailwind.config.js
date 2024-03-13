/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '3rem',
        sm: '0.3rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '0.3rem',
      },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translate(0)' },
        },
        wiggle1: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        wiggle2: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
        wiggle1: 'wiggle1 2s ease-in-out',
        wiggle2: 'wiggle2 2s ease-in-out',
      },
      backgroundImage: {
        'hero': "url('/src/hero.jpg')",
      },
      colors: {
        kok: "#062a4d",
        oq: "#f2f0f0",
        toq_kok: "#212353",
        kok1: "#439DC3",
      },
    },
    },
  },
  plugins: [],
}