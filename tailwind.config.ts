import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        teal: {
          DEFAULT: "#00d4aa",
          dim: "#00a88a",
          dark: "#007a5e",
        },
        gold: {
          DEFAULT: "#f0a500",
          dim: "#c88700",
          dark: "#b87800",
        },
        navy: {
          0: "#040d1a",
          1: "#070f1f",
          2: "#0b1628",
          3: "#0f1d33",
        },
      },
      backgroundImage: {
        "navy-card": "linear-gradient(135deg, rgba(11,22,40,0.85), rgba(7,15,31,0.85))",
      },
    },
  },
  plugins: [],
};

export default config;