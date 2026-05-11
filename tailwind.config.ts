import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        surface: "var(--surface)",
        line: "var(--line)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)"
        },
        sand: "var(--sand)",
        onInk: {
          DEFAULT: "var(--on-ink)",
          muted: "var(--on-ink-muted)",
          line: "var(--on-ink-line)",
          surface: "var(--on-ink-surface)"
        }
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        crisp: "var(--shadow-crisp)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      maxWidth: {
        content: "72rem"
      }
    }
  },
  plugins: []
};

export default config;
