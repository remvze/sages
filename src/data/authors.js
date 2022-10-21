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
  {
    name: 'Aldous Huxley',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Viktor Frankl',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Friedrich Nietzsche',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Sylvia Plath',
    priority: priority.low,
    sex: sex.male,
  },
];

export default authors;
