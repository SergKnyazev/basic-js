const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  resultValues: [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.resultValues.length;
  },

  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.resultValues.push(String(value));
    return this;
  },

  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.resultValues[position - 1] === undefined) {
      this.resultValues = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    this.resultValues.splice(position - 1, 1)
    return this;
  },

  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.resultValues.reverse();
    return this;
  },

  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let resultChain = this.resultValues.map(elem => `( ${elem} )`).join('~~');
    this.resultValues = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
