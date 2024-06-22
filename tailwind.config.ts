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
      xl: ["2.8rem", "3.6rem"]
    },
    colors: {
      neutral: {
        100: "#f6f5f4",
        200: "#adaaa7",
        800: "#262625",
        900: "#1e1d1c",
      },
    },
  },
  plugins: [],
};
export default config;
