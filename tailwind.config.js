/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin")
const themeSwapper = require("tailwindcss-theme-swapper")

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    colors: {
      broad: "#059669" /* bg-emerald-600 */
    }
  },
  plugins: [
    flowbite,
    themeSwapper({
      themes: [
        {
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              primary: "#4338ca" /* indigo-700 */,
              secondary: "",
              terciary: "#8080ff",
              backdrop: "#f8fafc" /* bg-slate-50 */,
              inverse: "#1e293b" /* slate-800 */
            }
          }
        },
        {
          name: "dark",
          selectors: [".dark", "[dark]", '[data-theme="dark"]'],
          theme: {
            colors: {
              primary: "#7c3aed" /* violet-600 */,
              backdrop: "#1e293b" /* slate-800 */,
              inverse: "#f8fafc" /* bg-slate-50 */
            }
          }
        }
      ]
    })
  ]
}
