import authors from '../data/authors.js';
import { sex } from '../data/const.js';
import logger from '../lib/logger.js';

const allCount = authors.length;
const { length: maleCount } = authors.filter(author => author.sex === sex.male);
const { length: femaleCount } = authors.filter(
  author => author.sex === sex.female
);

logger.success(
  `${allCount} authors are on the list. (${femaleCount} female, ${maleCount} male)`
);
