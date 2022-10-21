import path from 'node:path';
import { Command } from 'commander';

import { loadJSON } from './helpers/json.js';
import { getPath } from './helpers/path.js';

import selectCommand from './commands/select.js';

const program = new Command();
const { dirname } = getPath(import.meta.url);
const pkg = loadJSON(path.resolve(dirname, '../package.json'));

program
  .name('authors')
  .description('A CLI to randomly select an author')
  .version(pkg.version);

program
  .command('select')
  .description('Select a random author')
  .action(selectCommand);

export default program;
