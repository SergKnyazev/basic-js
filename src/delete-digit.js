const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const s = String(n);

  let maxVal = 0;
  for (let i = 0; i < s.length; i++) {
    let shortS = Number(`${s.slice(0, i)}${s.slice(i + 1)}`);
    if (shortS > maxVal) maxVal = shortS;
  }
  return maxVal;
}

module.exports = {
  deleteDigit
};
