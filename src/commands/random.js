import path from 'node:path';
import chalk from 'chalk';
import clipboard from 'clipboardy';

import { sex, priority } from '../data/const.js';
import { historySize } from '../config/history.js';
import authors from '../data/authors.js';
import { selectRandomAuthor } from '../lib/author.js';
import logger from '../lib/logger.js';
import { getPath } from '../helpers/path.js';
import History from '../lib/history.js';

const { dirname } = getPath(import.meta.url);
const historyFile = path.resolve(dirname, '../history/index.json');

/**
 * Normalize the options object
 *
 * @param {{
 *   sex?: string,
 *   priority?: string
 * }} options - Options to be normalized
 *
 * @returns {{
 *   sex: (string | null),
 *   priority: (number | null)
 * }}
 */
export const normalizeOptions = options => {
  let selectedSex = null;
  let selectedPriority = null;

  if (options.sex) {
    let sexOption = options.sex.toLowerCase();

    if (['m', 'male'].includes(sexOption)) selectedSex = sex.male;
    if (['f', 'female'].includes(sexOption)) selectedSex = sex.female;
  }

  if (options.priority) {
    selectedPriority = priority[options.priority.toLowerCase()] || null;
  }

  return {
    sex: selectedSex,
    priority: selectedPriority,
  };
};

/**
 * Normalize the given namespace.
 *
 * @param {string} ns - Namespace to be normalized
 * @returns {string} - Returns default if nothing is provided
 */
export const normalizeNamespace = ns => {
  if (!ns) return 'default';

  const namespace = ns.toLowerCase();

  const abbrs = {
    ig: 'instagram',
    tw: 'twitter',
    tg: 'telegram',
  };

  return abbrs[namespace] || namespace;
};

/**
 * Command to select a random author
 *
 * @param {{
 *   sex?: string,
 *   priority?: string,
 *   namespace?: string
 * }} options - Options given to the command
 *
 * @returns {void}
 */
const random = options => {
  const history = new History(
    historyFile,
    historySize,
    normalizeNamespace(options.namespace)
  );

  const author = selectRandomAuthor(
    authors,
    history,
    normalizeOptions(options)
  );

  if (!author) {
    return logger.error('No author could be found.');
  }

  clipboard.writeSync(author);

  logger.success(`Selected author: ${chalk.underline(author)}`);
  logger.success('The name is copied to your clipboard.');
};

export default random;
