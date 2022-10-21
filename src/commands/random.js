import { sex } from '../data/const.js';
import { selectRandomAuthor } from '../lib/author.js';

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
    if (['f', 'female'].includes(_sex)) selectedSex = sex.female;
  }

  const author = selectRandomAuthor(selectedSex);

  console.log(author);
};

export default random;
