import path from 'node:path';

import { selectRandom, shuffle } from '../helpers/random.js';
import { getPath } from '../helpers/path.js';
import History from './history.js';

const { dirname } = getPath(import.meta.url);
const historyFile = path.resolve(dirname, '../history/index.json');

/**
 * Normalize the given list for random selection
 *
 * @param {Array<{
 *   name: string,
 *   priority: number
 * }>} authors - List of authors to be normalized
 *
 * @returns {Object<string, number>} - Normalized authors list
 *
 * @example
 *   normalizeAuthors([{
 *     name: 'John',
 *     priority: 1
 *   }]) // -> { 'John': 1 }
 */
export const normalizeAuthors = authors => {
  const normalized = {};

  authors.forEach(author => {
    normalized[author.name] = author.priority;
  });

  return normalized;
};

/**
 * Select a random author
 *
 * @param {Array<{
 *   name: string,
 *   sex: string,
 *   priority: number
 * }>} authors - List of authors
 * @param {string} [sex] - Author's sex (optional)
 * @returns {string} - Randomly selected author
 *
 * @example
 *   selectRandomAuthor() // -> John Doe
 */
export const selectRandomAuthor = (authors, sex) => {
  if (!Array.isArray(authors) || authors?.length === 0) return null;

  const authorsList = sex
    ? authors.filter(
        author => author.sex.toLocaleLowerCase() === sex.toLocaleLowerCase()
      )
    : authors;

  const normalizedAuthors = normalizeAuthors(shuffle(authorsList));
  const history = new History(historyFile);

  let randomAuthor;

  do {
    randomAuthor = selectRandom(normalizedAuthors);
  } while (history.exists(randomAuthor));

  history.write(randomAuthor);

  return randomAuthor;
};
