const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatableStr = str;
  let additionStr = "";
  const defaultSep = '+';
  const defaultAddSep = '|';
  if (options.hasOwnProperty('addition')) {
    additionStr = String(options.addition);
    if (Number.isInteger(options.additionRepeatTimes)) {
      if (options.hasOwnProperty('additionSeparator')) {
        additionStr += String(options.additionSeparator);
        additionStr = additionStr.repeat(options.additionRepeatTimes);
        additionStr = additionStr.slice(0, String(options.additionSeparator).length * -1);
      } else {
        additionStr += defaultAddSep;
        additionStr = additionStr.repeat(options.additionRepeatTimes);
        additionStr = additionStr.slice(0, -1);
      }
    }
  }
  if (Number.isInteger(options.repeatTimes)) {
    if (options.hasOwnProperty('separator')) {
      repeatableStr += additionStr + String(options.separator);
      repeatableStr = repeatableStr.repeat(options.repeatTimes);
      repeatableStr = repeatableStr.slice(0, String(options.separator).length * -1);
    } else {
      repeatableStr += additionStr + defaultSep;
      repeatableStr = repeatableStr.repeat(options.repeatTimes);
      repeatableStr = repeatableStr.slice(0, -1);
    }
  } else repeatableStr += additionStr;
  return repeatableStr;
}

module.exports = {
  repeater,
};
