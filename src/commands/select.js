import { randomAuthor } from '../lib/author.js';

const select = () => {
  const author = randomAuthor();

  console.log(author.name);
};

export default select;
