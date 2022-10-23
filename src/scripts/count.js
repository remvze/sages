import authors from '../data/authors.js';
import logger from '../lib/logger.js';

const count = authors.length;

logger.success(`${count} authors are on the list.`);
