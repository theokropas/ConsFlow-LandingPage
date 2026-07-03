import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        slateblue: "#1f3a5f",
        brandblue: "#2f81df",
        calm: "#eef6fb",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 32, 51, 0.08)",
        premium: "0 24px 70px rgba(16, 32, 51, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
