import chalk from 'chalk';
import clipboard from 'clipboardy';

import { sex } from '../data/const.js';
import { selectRandomAuthor } from '../lib/author.js';
import logger from '../lib/logger.js';

/**
 * Command to select a random author
 *
 * @param {{
 *   sex?: string
 * }} options - Options given to the command
 *
 * @returns {void}
 */
const random = options => {
  let selectedSex = null;

  if (options.sex) {
    let _sex = options.sex.toLowerCase();

    if (['m', 'male'].includes(_sex)) selectedSex = sex.male;
    else if (['f', 'female'].includes(_sex)) selectedSex = sex.female;
    else {
      return logger.error(`'${_sex}' is not a valid sex`);
    }
  }

  const author = selectRandomAuthor(selectedSex);

  clipboard.writeSync(author);

  logger.success(`Selected author: ${chalk.underline(author)}`);
  logger.success('The name is copied to your clipboard.');
};

export default random;
