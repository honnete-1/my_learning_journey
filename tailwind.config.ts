import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo - main brand color
          light: "#818CF8",
          dark: "#3730A3",
        },
        secondary: {
          DEFAULT: "#F59E0B", // Amber - accent color
          light: "#FBBF24",
          dark: "#B45309",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;
