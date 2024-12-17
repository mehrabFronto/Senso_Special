import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        foreground: "var(--foreground-color)",
        primary: "var(--primary-color)",
      },

      fontFamily: {
        sans: ["var(--font-farhang)", ...fontFamily.sans],
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "48px",
        "5xl": "64px",
      },

      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
} satisfies Config;
