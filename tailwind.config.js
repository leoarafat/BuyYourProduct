/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-gradient-start": "rgba(2,0,36,1)",
        "custom-gradient-mid": "rgba(20,20,129,1)",
        "custom-gradient-end": "rgba(0,212,255,1)",
      },
    },
  },
  plugins: [],
};
