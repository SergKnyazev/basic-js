const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  const k = 0.693 / HALF_LIFE_PERIOD;
  const chars = '.0123456789';

  if (
    typeof sampleActivity !== 'string' ||
    sampleActivity === '' ||
    sampleActivity === '0'
  )
    return false;

  for (let i = 0; i < sampleActivity.length; i++) {
    if (!chars.includes(sampleActivity[i])) return false;
  }

  if (Number(sampleActivity) > MODERN_ACTIVITY) return false;

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
}

module.exports = {
  dateSample,
};
