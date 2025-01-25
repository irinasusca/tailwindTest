/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark-grey' : '#1b1b1b',
        'dark-white' : '#ffffff',
      },
      fontFamily: {
        
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'katerina':['Katerina', 'Helvetica' ] ,
      }
    },
  },
  plugins: [],
}

