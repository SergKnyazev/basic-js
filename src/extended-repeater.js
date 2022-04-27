const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options;
  let result = '';
  let resultAddition = '';

  if (separator === undefined) {
    separator = '+'
  }

  if (additionSeparator === undefined) {
    additionSeparator = '|'
  }

  if (addition !== undefined) {
    addition = `${addition}`;
  } else {
    addition = ''
  }

  str = `${str}`;

  if (additionRepeatTimes === undefined) {
    resultAddition = addition;
  } else {
    for (let i = 1; i <= additionRepeatTimes; i++) {
      if (i === additionRepeatTimes) {
        resultAddition += `${addition}`
      } else {
        resultAddition += `${addition}${additionSeparator}`
      }
    }
  }

  if (repeatTimes === undefined) {
    result = `${str}${resultAddition}`
  } else {
    for (let i = 1; i <= repeatTimes; i++) {
      if (i === repeatTimes) {
        result += `${str}${resultAddition}`
      } else {
        result += `${str}${resultAddition}${separator}`
      }
    }
  }

  return result;
}

module.exports = {
  repeater
};
