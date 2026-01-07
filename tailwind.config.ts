import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          blue: "#3B82F6",
          teal: "#14B8A6",
          dark: "#0B132B"
        }
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #3B82F6, #14B8A6)"
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

export default config;

