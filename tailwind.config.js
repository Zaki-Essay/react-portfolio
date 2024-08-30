/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Roboto", "sans - serif"],
      },
      colors: {
        primaryColor: "#16181C",
        lightText: "rgba(255,255,255,0.91)",
        designColor: "#0199ff",
        titleColor: "#ffffff",
        test: "linear-gradient(145deg, #1e2024, #23272b)",
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/banner.jpg')",
      },
    },
  },
  plugins: [],
};
