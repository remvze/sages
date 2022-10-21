import chalk from 'chalk';

const logger = {
  /**
   * Log a success message
   *
   * @param {string} message - Message to be logged
   * @returns {void}
   *
   * @example
   *   logger.success('Hello worl')
   */
  success: message => {
    console.log(`${chalk.green('✔')}  ${message}`);
  },
};

export default logger;
