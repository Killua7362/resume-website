import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist:["border-[#0275D8]","border-[#00C435]","text-[#C10528]","text-[#20A7D8]"],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors:{
        'background':'#191717',
        'foreground':'#F1EFEF',
        'bblue':'#0B60B0'
      }
    },
  },
  plugins: [],
};
export default config;
