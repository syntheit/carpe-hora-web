/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      color: {
        family: "#E11D48",
        work: "#009E60",
      },
    },
  },
  plugins: [],
  safelist: ["bg-red-600", "bg-green-600", "bg-blue-600", "bg-fuchsia-600", "bg-slate-600", "bg-pink-600", "bg-orange-600",
              "border-red-600", "border-green-600", "border-blue-600", "border-fuchsia-600", "border-slate-600", "border-pink-600", "border-orange-600"],
};
