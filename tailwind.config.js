// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'greatVibes': ['GreatVibes-Regular', 'cursive'],
        'ralewaRegular': ['Raleway-Regular', 'sans-serif'],
        'cmunbi': ['cmunbi', 'sans-serif'],
        'cmunrm': ['cmunrm', 'sans-serif'],

      },
      backgroundImage: {
        'hero-image': "url('src/assets/images/jpg/heroImage4.jpg')",
      },
      colors: {
        'primary': '#7c9b88',
        'secondary': '#3A4B40',
        'tertiary': '#9CB0A4',
        'quaternary': '#7798AD',
        'quinary': '#446579',
      },
    },
  },
  plugins: [],
}
