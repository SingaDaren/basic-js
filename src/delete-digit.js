const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numStr = n.toString();
  const length = numStr.length;
  let prev = Math.floor(n / 10 ** (length - 1));
  for (let i = 0; i < length; i += 1) {
    let next = Math.floor(n / 10 ** (length - 2 - i)) % 10;
    // return prev < next || i === length - 1
    //   ? Number(numStr.replace(numStr[i], ""))
    //   : (prev = next);
    if (prev < next || i === length - 1) {
      return Number(numStr.replace(numStr[i], ""));
    }
    prev = next;
  }
}

module.exports = {
  deleteDigit,
};
