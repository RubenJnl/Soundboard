const startsWith = require("lodash/startsWith");
const find = require("lodash/find");

module.exports = function(files, name) {
  return find(files, file => file.startsWith(`${name}.`));
};
