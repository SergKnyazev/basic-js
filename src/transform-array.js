const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

  const DIS_N = '--discard-next';
  const DIS_P = '--discard-prev';
  const DOU_N = '--double-next';
  const DOU_P = '--double-prev';

  const _arr = [...arr];
  const len = _arr.length - 1;

  if (_arr[0] === DIS_P || _arr[0] === DOU_P) _arr.shift();
  if (_arr[len] === DIS_N || _arr[len] === DOU_N) _arr.pop();

  _arr.map((elem, i) => {
    if (elem === DIS_N) _arr.splice(i, 2, '*', '*');
    if (elem === DIS_P) _arr.splice(i - 1, 2, '*', '*');
    if (elem === DOU_N) _arr.splice(i, 1, _arr[i + 1]);
    if (elem === DOU_P) _arr.splice(i, 1, _arr[i - 1]);
  });

  return _arr.filter(elem => elem !== '*');
}

module.exports = {
  transform,
};
