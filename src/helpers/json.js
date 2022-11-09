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
  try {
    const data = fs.readFileSync(path);

    return JSON.parse(data);
  } catch (error) {
    writeJSON(path, initial);

    return initial;
  }
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
  const data = typeof json === 'string' ? json : JSON.stringify(json, null, 2);

  fs.writeFileSync(path, data);
};
