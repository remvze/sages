import { loadJSON, writeJSON } from '../helpers/json.js';
import { historySize } from '../data/const.js';

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
  constructor(path) {
    this.path = path;
  }

  /**
   * @property {Function} getHistory - Get the current history
   * @access private
   *
   * @returns {Array} - The history
   */
  #getHistory() {
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
    const history = this.#getHistory();

    return history.includes(name);
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
    const history = this.#getHistory();

    if (history.includes(name)) return;
    if (history.length === historySize) history.pop();

    history.unshift(name);

    writeJSON(this.path, history);
  }
}

export default History;
