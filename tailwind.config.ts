import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0E13",
          900: "#12161D",
          800: "#161B22",
          border: "#232935",
        },
        paper: {
          DEFAULT: "#EDEFF2",
          muted: "#8891A0",
          faint: "#5B6270",
        },
        signal: {
          up: "#3DDC84",
          down: "#8891A0",
        },
        gold: "#D8A857",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "720px",
      },
    },
  },
  plugins: [],
} satisfies Config;
