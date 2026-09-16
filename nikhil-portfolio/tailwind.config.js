/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        ink: {
          DEFAULT: "#101826",
          2: "#1B2436",
          3: "#25314A",
        },
        paper: {
          DEFAULT: "#F7F6F2",
          2: "#FFFFFF",
        },
        body: "#16202E",
        muted: "#5C6676",
        line: "#E4E1D8",
        accent: {
          DEFAULT: "#C98A3B",
          dark: "#A6712D",
          light: "#E4B372",
        },
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,24,38,0.06), 0 8px 24px -12px rgba(16,24,38,0.12)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
