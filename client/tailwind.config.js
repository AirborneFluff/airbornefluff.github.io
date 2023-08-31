/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[class="dark-theme"]'],
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: {
          0: '#000C11',
          1: '#001921',
          2: '#003E54',
          3: '#80BDD3',
        },
        light: {
          0: '#DDD',
          1: '#999',
          2: '#777',
          3: '#80BDD3',
        },
        warn: '#F9A207',
        accent: '#4C1E97'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fade1: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fade2: {
          '0%': { opacity: '0' },
          '75%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade0 1.5s ease-in',
        'fade-in-delay-1': 'fade1 1.5s ease-in',
        'fade-in-delay-2': 'fade2 1.5s ease-in',
      },
    },
  },
  plugins: [],
}

