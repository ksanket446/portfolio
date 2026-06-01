/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#F8F9FA",
        "text-primary": "#0F172A",
        "text-secondary": "#64748B",
        "accent": "#2563EB",
        "border-color": "#E2E8F0",
        "footer-bg": "#0F172A",
      },
      fontFamily: {
        "sans": ["DM Sans", "sans-serif"],
        "display-lg": ["DM Sans", "sans-serif"],
        "headline-lg": ["DM Sans", "sans-serif"],
        "headline-md": ["DM Sans", "sans-serif"],
        "body-md": ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "hero-title": ["76px", { lineHeight: "1.1", fontWeight: "800" }],
        "section-title": ["44px", { lineHeight: "1.2", fontWeight: "700" }],
        "card-title": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-text": ["17px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "section": "120px",
        "container": "1200px"
      },
      borderRadius: {
        "card": "12px",
        "btn": "8px"
      }
    }
  },
  plugins: [],
}
