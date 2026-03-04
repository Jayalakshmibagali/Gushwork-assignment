
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      maxWidth: {
        1240: "1240px",
      },
      colors: {
        navy: "#111827",
        brand: "#2B3990",
        tableBorder: "#2b3b50",
        tableHead: "#1f3147",
        tableBody: "#1F2937",
    
      },
    },
  },
  plugins: [],
};
