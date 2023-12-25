const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/([a-z])\1*/g, (char) =>
    char.length > 1 ? char.length + char[0] : char[0]
  );
}

module.exports = {
  encodeLine,
};
