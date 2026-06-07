/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-black": "#2c2e33",
        "primary-lilac": "#ac6cff",
        "background-paper": "#fff",
        ghostwhite: "#f8f9ff",
        "primary-indigo-light": "#2f1c48",
        yellow: "#e2fe30",
        black: "#000",
        "primary-indigo-dark": "#2b2038",
        darkslategray: {
          "100": "#333",
          "200": "#2d2d2d",
        },
        midnightblue: "#3d0a67",
        lavender: "#eadaff",
        mediumorchid: "#873eaf",
        "neutral-grey": "#808080",
        palevioletred: "#b0407c",
        mistyrose: "#f6e7e5",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        gray: "rgba(255, 255, 255, 0.87)",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        gainsboro: "#e5e5e5",
        lightslategray: "#92929d",
      },
      spacing: {},
      fontFamily: {
        "body-l-medium": "Poppins",
        montserrat: "Montserrat",
        inherit: "inherit",
        "varela-round": "'Varela Round'",
        "components-badge-label": "Roboto",
      },
      borderRadius: {
        "11xl": "30px",
        "21xl": "40px",
        xl: "20px",
        "41xl": "60px",
        "10xs": "3px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "11xl": "30px",
      lg: "18px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "xs-8": "11.8px",
      "42xl": "61px",
      "18xl": "37px",
      "30xl": "49px",
      xs: "12px",
      sm: "14px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
        // mq1300
      xxl: {
        raw: "screen and (max-width: 1300px)",
      },
      // mq1250
      xl: {
        raw: "screen and (max-width: 1250px)",
      },
      // mq1125
      lg: {
        raw: "screen and (max-width: 1125px)",
      },
      // mq1050
      md1050: {
        raw: "screen and (max-width: 1050px)",
      },
      // mq800
      md800: {
        raw: "screen and (max-width: 800px)",
      },
      // mq750
      md: {
        raw: "screen and (max-width: 750px)",
      },
      // mq450
      sm: { 
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
