import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-Poppins)"],
      },
      colors: {
        background: '#eeeef3',
        text: '#111827',
        navbar: '#ffffff',
        moody: '#1A1D29',
        silver: 'B1B2B5',
        pearl: '#C2BBAC',
        tea: '#EAE4DD',
      },
    },
  },
  plugins: [],
} satisfies Config;
