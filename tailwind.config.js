/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spline: ["Spline Sans Mono", "monospace"],
      },
      colors: {
        dark: {
          100: "#cdcdcf",
          200: "#9a9ca0",
          300: "#686a70",
          400: "#353941",
          500: "#030711",
          600: "#02060e",
          700: "#02040a",
          800: "#010307",
          900: "#010103",
        },
      },
    },
  },
  plugins: [],
};
