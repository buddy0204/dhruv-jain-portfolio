import type { Config } from "tailwindcss";

// Design tokens. The four "intent" colours are the site's visual language:
// they mark search intent everywhere (hero query stream, keyword process).
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0D1320", // page background: midnight navy
        surface: "#141C2C", // raised panels
        well: "#0A0F1A", // inset areas (inputs, query feed)
        rule: "#24304A", // borders & dividers
        chalk: "#E9EDF4", // primary text
        haze: "#929CB1", // secondary text
        dim: "#5E6880", // tertiary text
        brass: "#F0B45B", // accent: return on spend
        intent: {
          buy: "#5ED3A1", // transactional
          compare: "#F0B45B", // commercial
          learn: "#93A6FF", // informational
          block: "#FF8A7A", // negative / excluded
        },
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
        measure: "62ch",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(0.4em)" },
          to: { opacity: "1", transform: "none" },
        },
        caret: { "50%": { opacity: "0" } },
      },
      animation: {
        rise: "rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        caret: "caret 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
