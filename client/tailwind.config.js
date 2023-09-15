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
          0: '#FFF',
          1: '#999',
          2: '#777',
          3: '#80BDD3',
        },
        warn: '#F9A207',
        accent: '#4C1E97'
      },
      keyframes: {
        jumpFade: {
          '0%': {
            display: 'block',
            opacity: '0',
            transform: 'translateY(1rem)'
          },
          '50%': {
            display: 'block',
            transform: 'translateY(0)' },
          '100%': { opacity: '1' }
        },
        slideRightFade: {
          '0%': {
            opacity: '1',
            transform: 'translateX(-0.5rem)'
          },
          '50%': { transform: 'translateX(0)' },
          '100%': { opacity: '1' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in': 'fade 1.5s ease-in',
        'slide-right-fade': 'slideRightFade 1.5s ease-out',
        'jump-fade': 'jumpFade 1.5s ease-out',
      },
    },
  },
  plugins: [],
}

