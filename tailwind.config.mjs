/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ieee_online_store_bg: "#f3c135",
        ieee_blue: "#00629b",

        nav_bg: "#090d19",
        nav_text: "#eaf7ff",

        bg_primary: "#0a0e1b",
        top_gradient: "#1c284e",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 0% 0%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};