/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#071A3D",
          light: "#0E2A5C",
          dark: "#051530",
        },
        primary: {
          DEFAULT: "#146BFF",
          bright: "#1683FF",
        },
        cyan: {
          DEFAULT: "#22B8FF",
        },
        bg: {
          DEFAULT: "#F5F8FC",
        },
        card: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#10213F",
          secondary: "#64748B",
        },
        status: {
          success: "#22C55E",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 33, 63, 0.04), 0 4px 16px rgba(16, 33, 63, 0.06)",
        "card-hover": "0 2px 4px rgba(16, 33, 63, 0.06), 0 8px 24px rgba(16, 33, 63, 0.10)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};
