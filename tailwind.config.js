/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      aspectRatio: {
        portrait: "2/3",
      },
      keyframes: {
        goLeft: {
          "0%, 100%": { translate: "0% 0px" },
          "50%": { translate: "-20% 0px" },
        },
      },
    },
  },
  plugins: [],
};
