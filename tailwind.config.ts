import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#ffffff",
        foreground: "#000000",
      },
      secondary: {
        DEFAULT: "#000000",
        foreground: "#ffffff",
      },
      accent: {
        DEFAULT: "#6E71B6",
        foreground: "#ffffff",
      },
      gray: {
        DEFAULT: "#F2F2F2",
        foreground: "#A5A5A5",
      },
      border: "#000000",
      input: "#e5e5e5",
      ring: "#0a0a0a",
      background: "#ffffff",
      foreground: "#000000",
      destructive: {
        DEFAULT: "#ef4444",
        foreground: "#fafafa",
      },
      muted: {
        DEFAULT: "#f5f5f5",
        foreground: "#737373",
      },
      popover: {
        DEFAULT: "#ffffff",
        foreground: "#000000",
      },
      card: {
        DEFAULT: "#ffffff",
        foreground: "#000000",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
