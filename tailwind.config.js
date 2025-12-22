/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      keyframes: {
        confetti: {
          '0%': {
            transform: 'translateY(-100%) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(120vh) rotate(360deg)',
            opacity: '0.9',
          },
        },
      },
      animation: {
        confetti: 'confetti 4s linear infinite',
      },
      boxShadow: {
        modal: '0 25px 60px rgba(0,0,0,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      colors: {
        indigoBrand: '#4B3FFF',
        purpleBrand: '#7C3AED',
      },
    },
  },
  plugins: [],
};
