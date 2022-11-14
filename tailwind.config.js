/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/component/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}