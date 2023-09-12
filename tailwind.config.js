/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      backgroundImage: {
        "hero-carrer": "url('/images/hero-career.jpg')",
      },
    },
  },
  plugins: [],
};
