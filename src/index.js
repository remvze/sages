import path from 'node:path';
import { Command } from 'commander';

import { loadJSON } from './helpers/json.js';
import { getPath } from './helpers/path.js';

import randomCommand from './commands/random.js';

const program = new Command();
const { dirname } = getPath(import.meta.url);
const pkg = loadJSON(path.resolve(dirname, '../package.json'));

program
  .name('authors')
  .description('A CLI to randomly select an author')
  .version(pkg.version);

program
  .command('random')
  .description('Select a random author')
  .option('-s, --sex <string>', `Author's sex`)
  .option('-p, --priority <string>', `Author's priority`)
  .action(randomCommand);

export default program;
