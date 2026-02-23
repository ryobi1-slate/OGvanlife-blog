import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // OG Vanlife Brand Palette
        graphite: "#1C1F22",         // Main background
        sand: "#C8B28A",             // Primary accent (Warm Sand)
        bone: "#F1ECE3",             // Body text (Off-White)
        steel: "#6E747A",            // Secondary UI / borders
        alert: "#B23A2A",            // Muted Red – use sparingly
        // Derived shades
        "graphite-light": "#252A2E",
        "graphite-mid": "#2A2F34",
        "graphite-border": "#333840",
        "steel-light": "#8C9198",
        "sand-dim": "#A89570",
      },
      fontFamily: {
        heading: ["Space Grotesk", "Syncopate", "sans-serif"],
        body: ["Inter", "Work Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"],
      },
      fontSize: {
        "2xs": ["0.65rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      backgroundImage: {
        "grid-graphite":
          "linear-gradient(rgba(110,116,122,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(110,116,122,0.06) 1px, transparent 1px)",
        "gradient-radial-sand":
          "radial-gradient(ellipse at top, rgba(200,178,138,0.06) 0%, transparent 60%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "bar-fill": "barFill 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(16px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        barFill: {
          "0%": { width: "0%" },
          "100%": { width: "var(--bar-width)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
