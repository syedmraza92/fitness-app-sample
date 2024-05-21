import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'main-black': 'linear-gradient(to bottom, #312D2D, #000000)',
      },
      colors:{
        'gray-light': "#A6A6A6",
        'calender-gray': "#383838",
        'calender-orange': "#FF8F5C",
      },
      backgroundColor:{
        'mild-black': '#1B1B1B',
      }
    },
  },
  plugins: [],
};
export default config;
