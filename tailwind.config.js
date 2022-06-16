const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        primary: "#2dd4bf",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
