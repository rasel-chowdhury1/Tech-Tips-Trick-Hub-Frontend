import { colors, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: {
          DEFAULT: "#FF6500",
          100: "#e65b00",
          200: "#cc5100",
          300: "#b34700",
          500: "#ff741a",
          600: "#ff8433",
          700: "#ff934d",
        },
        secondary: {
          DEFAULT: "#00CCDD",
          100: "#00b8c7",
          200: "#00a3b1",
          500: "#1ad1e0",
          600: "#33d6e4",
          700: "#e6fafc",
        },
        dark: {
          DEFAULT: "#191919",
          100: "#202020",
        },
        text: {
          DEFAULT: "#262626",
          200: "#505050",
          300: "#838383",
        },
        background: "#F2F2F2",
        warning: "#FFCC67",
        border: {
          DEFAULT: "#E7E7E7",
          focused: "#D4D4D4",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
