/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f2ca50",
        "primary-container": "#d4af37",
        "on-primary": "#3c2f00",
        "secondary-blue": "#3B82F6",
        background: "#121416",
        surface: "#121416",
        "on-surface": "#e2e2e5",
        "on-surface-variant": "#d0c5af",
        "surface-container": "#1e2022",
        "surface-container-low": "#1a1c1e",
        "surface-container-high": "#282a2c",
        "surface-container-highest": "#333537",
        "surface-container-lowest": "#0c0e10",
        outline: "#99907c",
        "outline-variant": "#4d4635",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#F43F5E",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        display: ["Manrope"],
        headline: ["Manrope"],
        body: ["Manrope"],
        label: ["Manrope"],
      },
    },
  },
  plugins: [],
};
