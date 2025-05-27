import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      spacing: {
        "70": "17.5rem",
        "80": "20rem",
        "96": "24rem",
      },
    },
    screens: {
      "3xs": "320px", // Tiny phones
      "2xs": "375px", // iPhone SE / iPhone 12 mini
      xs: "480px", // Small phones portrait
      sm: "640px", // Tailwind default small
      md: "768px", // Medium
      lg: "1024px", // Large
      xl: "1280px", // Extra large
      "2xl": "1536px",
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  plugins: [],
};

export default config;
