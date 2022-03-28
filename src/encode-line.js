const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let countChars = 1;
  let encodeStr = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      countChars += 1;
    } else {
      encodeStr += countChars > 1 ? String(countChars) + str[i] : str[i];
      countChars = 1;
    }
  }

  return encodeStr;
}

module.exports = {
  encodeLine
};
