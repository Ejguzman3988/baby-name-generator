module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class", // or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00FFC5",
          dark: "#00CC9B",
        },
        secondary: {
          DEFAULT: "#EF6351",
          dark: "#C43720",
        },
        tertiary: {
          DEFAULT: "#0B4F6C",
          dark: "#07344F",
        },
        accent: {
          DEFAULT: "#01BAEF",
          dark: "#0087A3",
        },
        highlight: {
          DEFAULT: "#FFB2E6",
          dark: "#E678BB",
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
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography")({
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    }),
  ],
};
