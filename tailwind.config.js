/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        signature: ['"Great Vibes"', 'cursive'],
      },
      animation: {
        'scroll-wheel': 'scroll-wheel 2s infinite',
      },
      keyframes: {
        'scroll-wheel': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
