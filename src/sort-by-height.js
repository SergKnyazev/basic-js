const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let notMinusOneArr = [];

  for (let elem of arr) {
    if (elem !== -1) notMinusOneArr.push(elem);
  }

  notMinusOneArr = notMinusOneArr.sort((a, b) => a - b);

  let index = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== -1) {
      arr[j] = notMinusOneArr[index];
      index += 1;
    }
  }

  return arr;
}

module.exports = {
  sortByHeight,
};
