import weightedRandom from 'weighted-random';

import authors from '../data/authors.js';

export const randomAuthor = () => {
  const weights = authors.map(author => author.priority);
  const randomIndex = weightedRandom(weights);
  const author = authors[randomIndex];

  return author;
};
