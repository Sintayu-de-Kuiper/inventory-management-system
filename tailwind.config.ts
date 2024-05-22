import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#ffffff",
      secondary: "#000000",
      accent: "#6E71B6",
      "accent-hover": "#3F2F5E",
      gray: "#F2F2F2",
      "text-gray": "#A5A5A5",
    },
  },
  plugins: [],
};
export default config;
