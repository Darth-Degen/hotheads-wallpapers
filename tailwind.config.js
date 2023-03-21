/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["PressStart"],
        pressStart: ["PressStart"],
        daysOne: ["DaysOne"],
      },
      colors: {
        lightRed: "#ff9596",
        customRed: "#cf1714",
        dark: "#121212",
        "custom-black": "#121212",
        "custom-dark-gray": "#202020",
        "custom-mid-gray": "#303030",
        "custom-light-gray": "#6F7273",
        "custom-yellow": "#FFBA21",
        "custom-green": "#56BC78",
        "custom-orange": "#FF5722",
        // orange -> #fdba74
        // red -> #f87171
        // gray-300 -> #d1d5db
      },
      screens: {
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
