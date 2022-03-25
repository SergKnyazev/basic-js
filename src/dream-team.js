const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let lettersFromName = '';

  function getLettersFromName() {
    for (let name of members) {
      if (typeof(name) === 'string' && name !== '') lettersFromName += name.trim()[0];
    }
    return lettersFromName;  
  }

  Array.isArray(members) && getLettersFromName();

  return lettersFromName.toUpperCase().split('').sort().join('')
}

module.exports = {
  createDreamTeam
};
