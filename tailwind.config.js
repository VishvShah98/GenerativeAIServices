/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom background gradients
      backgroundImage: {
        "center-radial": "radial-gradient(ellipse, #4A3845, black 80%)",
        "top-radial": "radial-gradient(ellipse at top, #4A3845, black 80%)",
      },
      screens: {
        lg: { min: "1300px" }, // Define your custom breakpoint for Nest Hub
      },
    },
  },
  plugins: [],
};
