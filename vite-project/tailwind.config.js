/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-lightblue': '#EDF1FA',
        'custom-darkblue' : '#0C132B',
        'custom-darkestblue' : '#131744',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #13172c, #030825, #4a3f7a, #263b59)',
      },
    },
  },
  plugins: [],
}

