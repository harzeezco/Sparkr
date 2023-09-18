/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "868px",
      // => @media (min-width: 768px) { ... }


      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }1
      "2xl": "1536px",
      // => @media (min-width: 1536px) ... }
    },

    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        orangePrimary: "#FF463A",
        colorDark: "#121418",
        colorDarkLight: "#181818",
        colorLight: "#474A4F",

        "colorwhite-100": "#aeaeb0",
        toggle: "#f4f4f5",
        bg_Light: "#f9f9f9"
      },
      fontFamily: {
        primary: ["Syne", "sans-serif"],
        secondary: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
