/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-white": "#F2F2F2",
        "theme-black": "#0D0D0D",
        "theme-gray": "#9FA2A6",
        "theme-orange": "#F26938",
        "theme-orange-soft": "#F28B66",
      },
      screens: {
        mobileSm: {'max': "320px"},
        mobileRg: { 'max': "376px"},
        tabletSm: { 'max': "480px"},
        tabletRg: { 'max': "640px"},
        tabletLg: { 'max': "768px"},
        laptopSm: { 'max': "901px"},
        laptopRg: { 'max': "1024px"},
        desktopSm: { 'max': "1280px"},
        desktopRg: { 'max': "1350px"},
        desktopLg: { 'max': "1536px"},
      },
      fontFamily:{
        nunito: ['var(--font-nunito)']
      }
    },
  },
  plugins: [],
};
