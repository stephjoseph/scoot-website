// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },

      colors: {
        yellow: "#FCB72B",
        snow: "#F2F5F9",
        "dark-navy": "#495567",
        "dim-grey": "#939CAA",
        "light-grey": "#E5ECF4",
        "light-yellow": "#FFF4DF",
      },
    },
  },
  plugins: [],
};
