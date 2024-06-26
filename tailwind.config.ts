import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--main-font)"],
    },
    fontSize: {
      base: ["1.6rem", "2.0rem"],
      lg: ["2.0rem", "2.8rem"],
      xl: ["2.8rem", "3.6rem"],
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
      full: "9999px",
    },
    extend: {
      keyframes: {
        "border-appear": {
          "0%": { "border": "solid 1px rgba(246, 245, 244, 0)" },
          "60%, 65%": { "border": "solid 1px rgba(246, 245, 244, 0.05)" },
          "100%": { "border": "solid 1px rgba(246, 245, 244, 0.03)" },
        },
      },
      animation: {
        "border-appear": "border-appear linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
