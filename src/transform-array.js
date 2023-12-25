const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let transformedArr = [];
  if (arr.filter((item) => typeof item === "string").length === 0) {
    return arr;
  } else {
    arr.forEach((item, index, array) => {
      item === "--double-prev" &&
      array[index - 2] != "--discard-next" &&
      index != 0
        ? transformedArr.push(transformedArr.at(-1))
        : item === "--double-next" && index != array.length - 1
        ? transformedArr.push(array[index + 1])
        : item === "--discard-prev" && array[index - 2] != "--discard-next"
        ? transformedArr.pop()
        : item === "--discard-next" ||
          array[index - 1] === "--discard-next" ||
          item === "--discard-prev" ||
          item === "--double-prev" ||
          (item === "--double-next" && index === array.length - 1)
        ? item
        : transformedArr.push(item);
    });
    return transformedArr;
  }
}

module.exports = {
  transform,
};
