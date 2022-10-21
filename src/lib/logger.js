import chalk from 'chalk';
import symbols from 'log-symbols';

const logger = {
  /**
   * Log a success message
   *
   * @param {string} message - Success message to be logged
   * @returns {void}
   *
   * @example
   *   logger.success('Hello world')
   */
  success: message => {
    console.log(`${chalk.green(symbols.success)}  ${message}`);
  },

  /**
   * Log an error message
   *
   * @param {string} message - Error message to be logged
   * @returns {void}
   *
   * @example
   *   logger.error('Hello world')
   */
  error: message => {
    console.log(`${chalk.red(symbols.error)}  ${message}`);
  },
};

export default logger;
