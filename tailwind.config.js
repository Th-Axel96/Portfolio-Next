/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        146: "37.5rem",
      },
      backgroundImage: {
        "person-coding": "url('/person-coding-blur.jpg')",
        "elf-attack-1": "url'('/elf-attack-1.png')",
      },
      colors: {
        gold: "#f8b700",
        darkBlue: "#0000D1",
      },

      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        alice: ["Alice", "serif"],
        indieflower: ["Indie Flower", "cursive"],
        open: ["Open Sans", "sans-serif"],
      },
    },
  },
};
