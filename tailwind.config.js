/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 30,
      "2xl": 36,
    },
    colors: {
      black: {
        500: "#000000",
        400: "#111111",
        300: "#121214",
        200: "#1E1E1E",
      },
      white: {
        500: "#FFFFFF",
        400: "#FCFBFF",
        300: "#D9D9D9",
        200: "#FFFFFF99",
      },
      purple: {
        500: "#8726F8",
      },
    },

    extend: {
      fontFamily: {
        sans: "DM Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
