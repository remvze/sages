import { randomAuthor } from '../lib/author.js';

const random = () => {
  const author = randomAuthor();

  console.log(author.name);
};

export default random;
