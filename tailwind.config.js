/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        saasstartertheme: {
          primary: "#65DB7C",
          "primary-content": "#fefbf6",
          "neutral-content": "#AAD4F8",
          secondary: "#65DB7C",
          accent: "#58ACF2",
          neutral: "#180042",
          "base-content": "#fff",
          "base-100": "#051522",
          "extra-100": "#01161B",
        },
      },
    ],
  },
}
