import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFBF7",
        foreground: "var(--foreground)",
        primary: "#F7A607",
        secondary: "#FDC332",
      },
      fontFamily: {
        sans: ["Fredoka", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      
      container: {
        center: true, // Automatically centers the container
        padding: "1rem", // Adds padding to all screen sizes
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px", // Optional, for extra-large screens
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
