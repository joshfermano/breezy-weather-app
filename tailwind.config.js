/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('taos/plugin')],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./*.{html,js}', './js/**/*.js'],
  },
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        darkBlue: '#021526',
        gray: {
          100: '#f7f7f7',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        green: {
          100: '#f0fff4',
          200: '#ccf0e3',
          300: '#8ce99a',
          400: '#4cd964',
          500: '#00b74a',
          600: '#009e43',
          700: '#007d32',
          800: '#005c24',
          900: '#00441b',
        },
      },
    },
  },
  plugins: [],
};
