/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "person-coding": "url('/person-coding-blur.jpg')",
      },
      colors: {
        gold: "#f8b700",
        darkBlue: "#0000D1",
      },

      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
