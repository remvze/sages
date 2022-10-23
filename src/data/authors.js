import { priority, sex } from './const.js';

/**
 * @type {Array<{
 *   name: string,
 *   priority: number,
 *   sex: string
 * }>}
 */
const authors = [
  /**
   * High Priority
   */
  {
    name: 'Albert Camus',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Haruki Murakami',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Bertrand Russell',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Erich Fromm',
    priority: priority.high,
    sex: sex.male,
  },

  /**
   * Low Priority
   */
  {
    name: 'Fyodor Dostoevsky',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Aldous Huxley',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Voltaire',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Sylvia Plath',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Plato',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Virginia Woolf',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Charles Bukowski',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Carl Jung',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Leo Tolstoy',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Friedrich Nietzsche',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Arthur Schopenhauer',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'George Orwell',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Socrates',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Anton Chekhov',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Søren Kierkegaard',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Franz Kafka',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'C. S. Lewis',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Jean-Paul Sartre',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Seneca',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Epictetus',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Aristotle',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Jacques Derrida',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Oscar Wilde',
    priority: priority.low,
    sex: sex.male,
  },
];

export default authors;
