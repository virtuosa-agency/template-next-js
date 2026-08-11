import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
        18: "4.5rem",
        120: "30rem",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};

export default config;
