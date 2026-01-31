import type { Config } from "tailwindcss";

// Here you define the global styles of your application but especially the screen size variants
// You also define the main colors of your application
// You define the fonts of your application
// You define the spacing of your application
// You define the animations of your application
// You define the themes of your application

const config: Config = {
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
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
