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
        textColor: "#31433c",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/hero.jpg')",
        queryBanner: "url('/src/assets/bannerImg/querybanner.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
