/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#071827",
        navy: "#102D42",
        cyan: "#00B8D9",
        mint: "#00D6B4",
        ice: "#EAF5F8",
        body: "#334155",
        muted: "#64748B",
        line: "#DCE6EC",
        success: "#15803D",
        warning: "#B45309",
        danger: "#B91C1C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-plex)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 18px 40px -28px rgba(7, 24, 39, 0.45)",
      },
    },
  },
  plugins: [],
};
