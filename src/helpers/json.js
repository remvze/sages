import fs from 'node:fs';

/**
 * Load json data from a file
 *
 * @param {string} path - Path to the json file
 * @returns {object} - The json data
 *
 * @example
 *   loadJSON('./data.json')
 */
export const loadJSON = path => {
  const data = fs.readFileSync(path);

  return JSON.parse(data);
};
