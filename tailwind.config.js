/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               colors: {
                    black: "#000000",
                    backgroundBase: "#121212",
                    textColor: "#6a6a6a",
                    currentColor: "#A7A7A7",
                    spGreen: "#117a37",
               },
          },
     },
     plugins: [],
};
