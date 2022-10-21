import weightedRandom from 'weighted-random';

/**
 * Select a random but weighted key from an object
 *
 * @param {Object<string, number>} data - Data to be randomly select from
 * @returns {string} - Randomly selected value
 *
 * @example
 *   random({ foo: 1, bar: 2 }) // -> bar twice likely to foo
 */
export const selectRandom = data => {
  const keys = Object.keys(data);
  const weights = keys.map(key => data[key]);
  const randomIndex = weightedRandom(weights);
  const randomKey = keys[randomIndex];

  return randomKey;
};
