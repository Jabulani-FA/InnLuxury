/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "green": "#458681",
        "dark": "#000000",
        "light": "#ffffff",
      },
      backgroundImage: {
        "spiral": "url('./src/assets/bg-asset.jpg')",
        "tone": "linear-gradient(183deg, #458681, #ffffff)"
      }
    },
  },
  plugins: [],
}

