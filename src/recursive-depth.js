const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1;
    let maxDepth = 0
    for (const elem of arr) {
      if (Array.isArray(elem)) {
        maxDepth = Math.max(this.calculateDepth(elem), maxDepth);
      }
    }
    return count + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
