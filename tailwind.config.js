/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#0e1630',
      secondary: '#ed4a4a',
      text: '#fff',
      mainWhite: '#e4e6ec',
      texLight: '#94a3b8',
    },
    extend: {
      transitionProperty: {
        default:
          'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      },
    },
  },
  plugins: [],
};
