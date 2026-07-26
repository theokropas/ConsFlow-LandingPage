import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        navy: "#102a43",
        brand: "var(--brand)",
        link: "var(--link)",
        steel: "var(--steel)",
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        line: "var(--line)",
        softblue: "var(--soft-blue)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Arial", "sans-serif"],
        display: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
      boxShadow: {
        ambient: "0 24px 70px rgba(16, 42, 67, 0.10)",
        menu: "0 20px 50px rgba(12, 27, 42, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
