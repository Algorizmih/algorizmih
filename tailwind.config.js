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
        cyanInk: "#087A94",
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
      spacing: {
        gutter: "1rem",
        "gutter-sm": "1.25rem",
        "gutter-lg": "2rem",
        section: "3.5rem",
        "section-sm": "5rem",
        "section-lg": "6rem",
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        card: "0 18px 40px -28px rgba(7, 24, 39, 0.45)",
        focus: "0 0 0 3px rgba(8, 122, 148, 0.45)",
      },
    },
  },
  plugins: [],
};
