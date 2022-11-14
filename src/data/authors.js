import { priority, sex } from './const.js';

/**
 * @typedef {Object} Author
 *
 * @property {string} name
 * @property {number} priority
 * @property {string} sex
 */

/**
 * @type {Array<Author>}
 */
const authors = [
  /**
   * High Priority
   */
  {
    name: 'Alain de Botton',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Irvin D. Yalom',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'George Orwell',
    priority: priority.high,
    sex: sex.male,
  },
  {
    name: 'Margaret Atwood',
    priority: priority.high,
    sex: sex.female,
  },

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
  {
    name: 'Paulo Coelho',
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
  {
    name: 'Ernest Hemingway',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Agatha Christie',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Charles Dickens',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'James Joyce',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'William Faulkner',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Hermann Hesse',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'John Steinbeck',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Emily Dickinson',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Jane Austen',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Mark Twain',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Immanuel Kant',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'John Locke',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'René Descartes',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Ludwig Wittgenstein',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'David Hume',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Confucius',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Michel Foucault',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Niccolò Machiavelli',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Ralph Waldo Emerson',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Jean-Jacques Rousseau',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Epicurus',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'John Stuart Mill',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Simone de Beauvoir',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Martin Heidegger',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Thomas Hobbes',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Auguste Comte',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Baruch Spinoza',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Karl Popper',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Hannah Arendt',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Iris Murdoch',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Toni Morrison',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Mary Shelley',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'J. K. Rowling',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Charlotte Brontë',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Zora Neale Hurston',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Emily Brontë',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Louisa May Alcott',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Gertrude Stein',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Harper Lee',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Alice Walker',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Octavia E. Butler',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Anaïs Nin',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Octavia Butler',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Zadie Smith',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Doris Lessing',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Ursula K. Le Guin',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Clarice Lispector',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Chimamanda Ngozi Adichie',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Angela Carter',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Khaled Hosseini',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Kahlil Gibran',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Edgar Allan Poe',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'Rosa Luxemburg',
    priority: priority.low,
    sex: sex.female,
  },
  {
    name: 'Rumi',
    priority: priority.low,
    sex: sex.male,
  },
  {
    name: 'J. D. Salinger',
    priority: priority.low,
    sex: sex.male,
  },
];

export default authors;
