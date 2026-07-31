import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#060b16",
        panel: "#0d1728",
        cyan: "#22d3ee",
        azure: "#60a5fa",
        violet: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
