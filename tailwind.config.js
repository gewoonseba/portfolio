import plugin from "tailwindcss/plugin";
import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    screens: {
      ...screens,
      xs: "32rem",
      "3xl": "204.8rem",
    },
    fluid: ({ theme }) => ({
      defaultScreens: [theme("screens.xs"), theme("screens.3xl")],
    }),
    fontSize: {
      sm: ["1.4rem", "1.6rem"],
      base: ["1.6rem", "2rem"],
      md: ["2rem", "2.4rem"],
      lg: ["2.4rem", "2.8rem"],
      xl: ["2.8rem", "3.2rem"],
      huge: ["clamp(3.2rem, 14.6vw, 31rem)", "1.2"],
    },
    colors: {
      neutral: {
        100: "#f6f5f4",
        200: "#adaaa7",
        800: "#262625",
        900: "#1e1d1c",
      },
    },
    spacing: {
      0: "0",
      0.5: "0.2rem",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4.0rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6.0rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      19: "7.6rem",
      20: "8.0rem",
    },
    borderRadius: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2.0rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4.0rem",
      11: "4.4rem",
      12: "4.8rem",
      13: "5.2rem",
      14: "5.6rem",
      15: "6.0rem",
      16: "6.4rem",
      17: "6.8rem",
      18: "7.2rem",
      full: "9999px",
    },
    extend: {
      boxShadow: {
        border: "0 0 0 1px rgba(246, 245, 244, 0.1)",
      },
    },
  },
  plugins: [
    fluid,
    //adding in newer CSS features: https://www.youtube.com/watch?v=jCqtngrL2pA
    plugin(({ addVariant, addUtilities }) => {
      addVariant("starting", "@starting-style");

      addUtilities({
        ".transition-discrete": {
          transitionBehavior: "allow-discrete",
        },
      });
    }),
  ],
};
export default config;
