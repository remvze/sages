import path from 'node:path';
import chalk from 'chalk';
import clipboard from 'clipboardy';

import { sex, historySize, priority } from '../data/const.js';
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
 *   sex?: stringو
 *   priority?: string
 * }} options - Options to be normalized
 *
 * @returns {{
 *   sex: (string | null),
 *   priority: (number | null)
 * }}
 */
const normalizeOptions = options => {
  let selectedSex = null;
  let selectedPriority = null;

  if (options.sex) {
    let sexOption = options.sex.toLowerCase();

    if (['m', 'male'].includes(sexOption)) selectedSex = sex.male;
    else if (['f', 'female'].includes(sexOption)) selectedSex = sex.female;
    else {
      return logger.error(`'${sexOption}' is not a valid sex`);
    }
  }

  if (options.priority) {
    selectedPriority = priority[options.priority.toLowerCase()] || null;
  }

  return { sex: selectedSex, priority: selectedPriority };
};

/**
 * Command to select a random author
 *
 * @param {{
 *   sex?: stringو
 *   priority?: string
 * }} options - Options given to the command
 *
 * @returns {void}
 */
const random = options => {
  const history = new History(historyFile, historySize);
  const author = selectRandomAuthor(
    authors,
    history,
    normalizeOptions(options)
  );

  clipboard.writeSync(author);

  logger.success(`Selected author: ${chalk.underline(author)}`);
  logger.success('The name is copied to your clipboard.');
};

export default random;
