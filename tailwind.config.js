module.exports = {
  content: ["./*.html", "./src/**/*.css",  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  plugins: [require("@tailwindcss/forms"),require('flowbite/plugin')],
};
