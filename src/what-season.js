const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
// if (!(date instanceof Object && date.toString() === "Invalid Date"))
function getSeason(date) {
  if (typeof date === "undefined")
    return "Unable to determine the time of year!";
  if (isNaN(Date.parse(date)) || date[Symbol.toStringTag] === "Date")
    throw new Error("Invalid date!");
  return date.getMonth() === 11 || date.getMonth() < 2
    ? "winter"
    : date.getMonth() >= 2 && date.getMonth() < 5
    ? "spring"
    : date.getMonth() >= 5 && date.getMonth() < 8
    ? "summer"
    : date.getMonth() >= 8 && date.getMonth() < 11
    ? "autumn"
    : "Invalid date!";
}

module.exports = {
  getSeason,
};
