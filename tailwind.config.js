module.exports = {
  content: ["./public/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
