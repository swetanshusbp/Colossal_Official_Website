/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'b1' : 'rgba(37, 78, 112, 1)',
        'b2' : '#141415F2',
        'b3' : '#4B8BAB',
        'b4' : '#356CC9',
      },
      fontFamily:{
        "YO": ['Yeseva One', 'cursive'],
      }
    },
  },
  plugins: [],
}
