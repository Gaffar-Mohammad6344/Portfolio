/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // This allows the 'dark' class to trigger dark mode
  theme: {
    extend: {
      colors: {
        // You can define your primary dark color here to use it easily
        primaryDark: "#050816",
      }
    },
  },
  plugins: [],
}