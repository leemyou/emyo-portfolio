/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ADB5",
        },
        grey: {
          DEFAULT: "#303841",
          100: "#3A4750",
          200: "#303841",
        },
        white: {
          DEFAULT: "#EEEEEE",
          100: "#ffffff",
          200: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
