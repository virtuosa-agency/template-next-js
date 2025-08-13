// Here you define the global styles of your application but especially the screen size variants
// You also define the main colors of your application
// You define the fonts of your application
// You define the spacing of your application
// You define the animations of your application
// You define the themes of your application

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "372px",
      ph: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#FDFDFD",
        secondary: "#121212",
        tertiary: "#EFEFEF",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
      },
      spacing: {
        24: "24px",
        36: "36px",
        48: "48px",
        60: "60px",
        72: "72px",
        84: "84px",
        96: "96px",
        108: "108px",
        120: "120px",
        132: "132px",
        144: "144px",
        156: "156px",
        168: "168px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
