/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primaryRed: "#E75B4C",
      primaryRedHover: "#C23A33",
      primaryWhite: "#fff",
      lightGrey: "#d5d5d5",
      darkgrey: "#999",
      darkBlack: "#222",
      green: "#0C8F09",
    },
    boxShadow: {
      minus: "-4px 0px 4px rgba(0,0,0,0.25);",
      plus: "4px 0px 4px rgba(0,0,0,0.25);",
      all: "0px 0px 4px rgba(0,0,0,0.25);",
    },
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      36: "2.25rem",
    },
  },
  plugins: [],
};
