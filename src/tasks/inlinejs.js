const startsWith = require("lodash/startsWith");
const find = require("lodash/find");

module.exports = function(assets, files) {
  const jsFile = find(files.js, file => file.startsWith("appshell-script."));
  return assets[jsFile.substr(files.publicPath.length)].source();
};
