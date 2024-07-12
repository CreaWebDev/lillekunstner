/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // extend: {},
    colors: {
      aqua: '#d0f4ea',
      velvet: '#f9e5d9',
      tomato: '#f76566',
      ocean: '#18ACBA',
      rose: '#f7dfe1',
      abricot: '#F76566',
      bloody: '#692529',
      paynes: '#545f66',
      mint: '#f0fcf8', // e1f9f1
      tea: '#e8fcc2',
      pistachio: '#b1cc74',
    },
    fontFamily: {
      'sans': ['Arial'],
      'display': ['Annie Use Your Telescope']
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite'
      },
      backgroundImage: {
        'bg-img-mobile': "url('/images/bg/bg_mobile.svg')",
        'bg-img': "url('/images/bg/bg.svg')",
      }
    },
  },
  plugins: [],
}

