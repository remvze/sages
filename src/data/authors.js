import { priority, sex } from './const.js';

/**
 * @type {Array<{
 *   name: string,
 *   priority: number,
 *   sex: string
 * }>}
 */
const authors = [
  {
    name: 'Albert Camus',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Virginia Woolf',
    priority: priority.high,
    sex: sex.female,
  },
];

export default authors;
