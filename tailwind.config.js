/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      desktop: "1024px",
      tablet: "768px",
      mobile: "280px",
    },
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
        600: "#A259FF",
      },
      green: {
        500: "#0ACF85",
      },
      blue: {
        500: "#1ABCFE",
      },
      pink: {
        400: "#B780F4",
        200: "#DCC4E0",
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
