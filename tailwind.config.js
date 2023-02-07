/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["PressStart", "-apple-system", "system-ui", "monospace"],
        pressStart: ["PressStart"],
        daysOne: ["DaysOne"],
      },
      colors: {
        lightRed: "#ff9596",
        customRed: "#cf1714",
        dark: "#121212",
        "custom-black": "#121212",
        "custom-dark-gray": "#222222",
        "custom-mid-gray": "#303030",
        // orange -> #fdba74
        // red -> #f87171
      },
    },
  },
  plugins: [],
};
