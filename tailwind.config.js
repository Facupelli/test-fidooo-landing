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
        navbar:
          "linear-gradient(180deg, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 100%)",
        dudas:
          "linear-gradient(153deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)",
        transparente:
          "linear-gradient(180deg, rgba(33,33,33,0) 0%, rgba(243,117,236,0) 100%);",
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
        body3: "18px",
        body4: "16px",
        h1mobile: "32px",
      },
    },
  },
  plugins: [],
};
