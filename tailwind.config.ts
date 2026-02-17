/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F7",
        surface: "#FFFFFF",
        primaryText: "#1E1E1E",
        secondaryText: "#5F5F5F",
        mutedText: "#8C8C8C",

        primaryAccent: "#E86F2D",
        softHighlight: "#F3E8E1",
        divider: "#E8E6E3",

        highlight: "#3B82F6",
      },
    },
  },
  plugins: [],
};
