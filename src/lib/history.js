import path from 'node:path';

import { loadJSON, writeJSON } from '../helpers/json.js';
import { getPath } from '../helpers/path.js';
import { historySize } from '../data/const.js';

const { dirname } = getPath(import.meta.url);
const historyFile = path.resolve(dirname, '../history/index.json');

/**
 * Get the current history
 *
 * @returns {Array} - The history
 */
const getHistory = () => {
  const history = loadJSON(historyFile, []);

  return history;
};

/**
 * Check if a name exists in history
 *
 * @param {string} name - Author's name to check
 * @returns {boolean} - True if exists
 *
 * @example
 *   exists('John Doe')
 */
export const exists = name => {
  const history = getHistory();

  return history.includes(name);
};

/**
 * Add a name to the history
 *
 * @param {string} name - Name to add to the history
 * @returns {void}
 *
 * @example
 *   write('John Doe')
 */
export const write = name => {
  const history = getHistory();

  if (history.includes(name)) return;
  if (history.length === historySize) history.pop();

  history.unshift(name);

  writeJSON(historyFile, history);
};
