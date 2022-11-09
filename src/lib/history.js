import { loadJSON, writeJSON } from '../helpers/json.js';

class History {
  /**
   * @constructor
   *
   * @param {string} path - Path to history file
   * @param {number} size - History size
   * @param {string} [namespace=default] - History namespace to use
   * @returns {void}
   *
   * @example
   *   new History('./history.json')
   */
  constructor(path, size, namespace = 'default') {
    this.path = path;
    this.size = size;
    this.namespace = namespace.toLowerCase();
    this.cache = null;
  }

  /**
   * @property {Function} getHistory - Get the current history
   *
   * @returns {Object} - The history object with all namespaces
   */
  getHistory() {
    const history = loadJSON(this.path, {});

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

    return history[this.namespace]?.includes(name) || false;
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
    const namespace = history[this.namespace] || [];

    if (namespace.includes(name)) return;
    if (namespace.length === this.size) namespace.pop();

    namespace.unshift(name);

    history[this.namespace] = namespace;

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
    const history = this.getHistory();

    writeJSON(this.path, { ...history, [this.namespace]: [] });
  }
}

export default History;
