/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['manototv']
      },
      fontSize: {
        'xxs': ['10px', {
          letterSpacing: '-0.01em',
        }],
        'xxxs': ['8px', {
          letterSpacing: '-0.01em',
        }],
      }
    },
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    
  },
  plugins: [],
  

}
