module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#FDE2E2",
          lighter: "#F8B3B3",
          light: "#F2C4C4",
          DEFAULT: "#ED9E9E",
          dark: "#D48989",
          darker: "#9C5A5A",
          darkest: "#612E2E",
        },
        secondary: {
          lightest: "#E2E8F0",
          lighter: "#BFD1EA",
          light: "#c2d5fc",
          DEFAULT: "#8FACCE",
          dark: "#587FBF",
          darker: "#2E4E84",
          darkest: "#1D2C4E",
        },
        accent: {
          lightest: "#C5F2C5",
          lighter: "#98E5A4",
          light: "#5DCE72",
          DEFAULT: "#38B249",
          dark: "#2B872E",
          darker: "#1D571C",
          darkest: "#12330A",
        },
        neutral: {
          lightest: "#F4F4F4",
          lighter: "#E5E5E5",
          light: "#D4D4D4",
          DEFAULT: "#8e9192",
          dark: "#333333",
          darker: "#1A1A1A",
          darkest: "#000000",
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["2.5rem", { lineHeight: "3rem" }],
        h2: ["2rem", { lineHeight: "2.5rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        h4: ["1.25rem", { lineHeight: "1.75rem" }],
        "body-intro": ["1.25rem", { lineHeight: "1.75rem" }],
        "body-main": ["1rem", { lineHeight: "1.5rem" }],
        "medium-text": ["0.875rem", { lineHeight: "1.25rem" }],
        caption: ["1rem", { lineHeight: "1.5rem" }],
        "small-text": ["0.875rem", { lineHeight: "1.25rem" }],
      },
      letterSpacing: {
        normal: "0",
        wide: "0.1em",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      borderColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
