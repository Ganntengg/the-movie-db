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
    },
  },
  plugins: [],
};
