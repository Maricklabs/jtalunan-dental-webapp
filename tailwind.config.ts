import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/data/**/*.{ts,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F9F6ED",
        sand: "#E7DFC8",
        olive: "#7A6F1D",
        oliveLight: "#8C7C26",
        terracotta: "#B06D53",
        brown: "#7A4B3A",
        clay: "#C89A7C",
        ink: "#2B241C"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 14px 30px rgba(62, 45, 28, 0.12)",
        lift: "0 18px 40px rgba(74, 52, 32, 0.16)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out",
        "fade-in": "fade-in 0.6s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
