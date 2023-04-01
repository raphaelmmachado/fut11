/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        opacity: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wiggle: "wiggle 600ms ease-in-out infinite",
        opacity: "opacity 1s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
