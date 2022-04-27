const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The res should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let res = new Map();
  const revers = (array) => array.split('.').reverse().join('.');

  for (let domain of domains) {
    let _arr = `${revers(domain)}.`;
    let dot = '.'
    for (let elem of _arr) {
      if (elem === '.') {
        if (res.has(dot)) {
          res.set(dot, res.get(dot) + 1)
        } else {
          res.set(dot, 1)
        }
      } 
      dot += elem;
    }
  }

  return Object.fromEntries(res)
}

module.exports = {
  getDNSStats
};
