const tailwindcss = require("tailwindcss");

module.exports = {
  Plugin: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
