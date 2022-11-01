import { selectRandom, shuffle } from '../helpers/random.js';

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
 * @param {Array<import('../data/authors').Author>} authors - List of authors
 * @param {Object} history - An instance of History class
 * @param {string} [sex] - Author's sex (optional)
 * @returns {string} - Randomly selected author
 *
 * @example
 *   selectRandomAuthor() // -> John Doe
 */
export const selectRandomAuthor = (authors, history, options) => {
  if (!Array.isArray(authors) || authors?.length === 0) return null;

  const sex = options?.sex;
  const priority = options?.priority;

  let authorsList = sex
    ? authors.filter(
        author => author.sex.toLocaleLowerCase() === sex.toLocaleLowerCase()
      )
    : authors;

  authorsList = priority
    ? authorsList.filter(author => author.priority === priority)
    : authorsList;

  const normalizedAuthors = normalizeAuthors(shuffle(authorsList));

  /**
   * Empty the history if it contains all authors.
   */
  if (
    history.getHistory().length >= authorsList.length &&
    history.allExist(authorsList.map(author => author.name))
  ) {
    history.empty();
  }

  let randomAuthor;

  do {
    randomAuthor = selectRandom(normalizedAuthors);
  } while (history.exists(randomAuthor));

  history.write(randomAuthor);

  return randomAuthor;
};
