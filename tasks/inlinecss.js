const startsWith = require("lodash/startsWith");
const find = require("lodash/find");

module.exports = function(assets, files) {
  const cssFile = find(files.css, file => file.startsWith("appshell-style."));
  return assets[cssFile.substr(files.publicPath.length)].source();
};
