/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        lavender: '#dac7ef',
        soft: '#f9e5d9',
        green: '#85bdb3',
        dark: '#382144',
        abricot: '#d37983',
        _black: '#000000'
      },
      fontFamily: {
        'sans': ['Arial'],
        'display': ['Annie Use Your Telescope']
      },
      // Add keyframes and animation utilities for panorama background
      keyframes: {
        pan: {
          '0%': { 'background-position': 'left center' },
          '50%': { 'background-position': 'right center' },
          '100%': { 'background-position': 'left center' }
        }
      },
      animation: {
        // use with class `animate-panorama`
        panorama: 'pan 30s linear infinite'
      }
    },
  },
  plugins: [],
}
