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
        prueba: "linear-gradient(180deg, black 20px, rgba(0,0,0,.1) 10%)",
      },
      colors: {
        primary: "#231F48",
        secondary: "#BAECFF",
        "secondary-light": "#80DBFF",
      },
      dropShadow: {
        prueba: "0px 0px 30px #ff0000",
      },
    },
  },
  plugins: [],
};
