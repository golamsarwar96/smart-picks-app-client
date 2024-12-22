/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        bebas: ["Bebas Neue", "serif"],
        logo: ["Caveat", "serif"],
        jost: ["Jost", "serif"],
      },
      colors: {
        primaryColor: "#25302c",
        secondaryColor: "#ffe7c4",
        textColor: "#ffefd7",
      },
    },
  },
  plugins: [require("daisyui")],
};
