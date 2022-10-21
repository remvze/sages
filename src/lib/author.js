import { selectRandom } from './random.js';
import authors from '../data/authors.js';

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
const normalizeAuthors = authors => {
  const normalized = {};

  authors.forEach(author => {
    normalized[author.name] = author.priority;
  });

  return normalized;
};

/**
 * Select a random author
 *
 * @returns {string} - Randomly selected author
 *
 * @example
 *   selectRandomAuthor() // -> John Doe
 */
export const selectRandomAuthor = () => {
  const normalizedAuthors = normalizeAuthors(authors);
  const randomAuthor = selectRandom(normalizedAuthors);

  return randomAuthor;
};
