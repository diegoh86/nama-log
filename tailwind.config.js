/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./assets/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          navyLight: '#132B4F',
          blue: '#0284C7',
          orange: '#FF6B00',
          surface: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      animation: {
        'ride': 'ride 10s linear infinite',
      },
      keyframes: {
        ride: {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(100vw)' },
        }
      }
    },
  },
  plugins: [],
}
