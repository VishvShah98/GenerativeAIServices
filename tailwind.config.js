/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom background gradients
      backgroundImage: {
        'center-radial': 'radial-gradient(circle, #4A3845, black)',
        'top-radial': 'radial-gradient(circle at top, #4A3845, black)',
      },
    },
  },
  plugins: [],
}
