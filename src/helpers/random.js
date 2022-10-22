import weightedRandom from 'weighted-random';

/**
 * Shuffle the items of an array
 *
 * @param {Array} items - Array of items to shuffle
 * @returns {Array} - Shuffled array
 *
 * @example
 *   shuffle([1, 2, 3]) // -> [3, 1, 2]
 */
export const shuffle = items => {
  return items
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

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
  const weights = keys.map(key => Number(data[key]));
  const randomIndex = weightedRandom(weights);
  const randomKey = keys[randomIndex];

  return randomKey || null;
};
