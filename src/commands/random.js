import { selectRandomAuthor } from '../lib/author.js';

const random = () => {
  const author = selectRandomAuthor();

  console.log(author);
};

export default random;
