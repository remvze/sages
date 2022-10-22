import { loadJSON, writeJSON } from '../helpers/json.js';

class History {
  /**
   * @constructor
   *
   * @param {string} path - Path to history file
   * @returns {void}
   *
   * @example
   *   new History('./history.json')
   */
  constructor(path, size) {
    this.path = path;
    this.size = size;
    this.cache = null;
  }

  /**
   * @property {Function} getHistory - Get the current history
   *
   * @returns {Array} - The history
   */
  getHistory() {
    const history = loadJSON(this.path, []);

    return history;
  }

  /**
   * @property {Function} exists - Check if a name exists in history
   *
   * @param {string} name - Author's name to check
   * @returns {boolean} - True if exists
   *
   * @example
   *   history.exists('John Doe')
   */
  exists(name) {
    const history = this.getHistory();

    this.cache = history;

    return history.includes(name);
  }

  /**
   * Check if all given names exist in the history
   *
   * @param {Array<string>} names - An array of names to check
   * @returns {boolean} - True if all exist
   *
   * @example
   *   history.allExist(['foo', 'bar'])
   */
  allExist(names) {
    const result = names.every(name => this.exists(name));

    return result;
  }

  /**
   * @property {Function} write - Add a name to the history
   *
   * @param {string} name - Name to add to the history
   * @returns {void}
   *
   * @example
   *   history.write('John Doe')
   */
  write(name) {
    const history = this.getHistory();

    if (history.includes(name)) return;
    if (history.length === this.size) history.pop();

    history.unshift(name);

    writeJSON(this.path, history);
  }

  /**
   * @property {Function} empty - Empty the history
   *
   * @returns {void}
   *
   * @example
   *   history.empty()
   */
  empty() {
    writeJSON(this.path, []);
  }
}

export default History;
