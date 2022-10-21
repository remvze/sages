import fs from 'node:fs';

/**
 * Load json data from a file
 *
 * @param {string} path - Path to the json file
 * @param {(Object | null)} [initial] - Initial data if data doesn't exist
 * @returns {Object} - The json data
 *
 * @example
 *   loadJSON('./data.json')
 */
export const loadJSON = (path, initial = null) => {
  if (!fs.existsSync(path)) return initial;

  const data = fs.readFileSync(path);

  return JSON.parse(data);
};

/**
 * Write JSON data to a file
 *
 * @param {string} path - Path to write to
 * @param {(Object | string)} json - JSON data to write
 * @returns {void}
 *
 * @example
 *   writeJSON('data.json', { foo: 'bar' })
 */
export const writeJSON = (path, json) => {
  const data = typeof json === 'string' ? json : JSON.stringify(json);

  fs.writeFileSync(path, data);
};
