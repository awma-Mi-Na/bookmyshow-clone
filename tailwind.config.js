module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navclr: {
          50: "#efeffd",
          100: "#d1d2e4",
          200: "#b2b4cd",
          300: "#9396b8",
          400: "#7578a2",
          500: "#5c5f89",
          600: "#474a6b",
          700: "#32354d",
          800: "#1d1f30",
          900: "#070b16",
        },
        premierbg: {
          100: "#2b3147",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
