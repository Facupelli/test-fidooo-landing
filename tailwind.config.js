/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        navbar: "linear-gradient(180deg, black 20px, rgba(0,0,0,.1) 10%)",
      },
      colors: {
        primary: "#231F48",
        secondary: "#BAECFF",
        "secondary-light": "#80DBFF",
      },
      fontSize: {
        h1: "96px",
        h4: "40px",
        body1: "24px",
        body2: "20px",
        body4: "16px",
        h1mobile: "32px",
      },
    },
  },
  plugins: [],
};
