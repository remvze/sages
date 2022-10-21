import path from 'node:path';
import { Command } from 'commander';

import { loadJSON } from './helpers/json.js';
import { getPath } from './helpers/path.js';

const program = new Command();
const { dirname } = getPath(import.meta.url);
const pkg = loadJSON(path.resolve(dirname, '../package.json'));

program
  .name('Authors')
  .description('A CLI to randomly select an author')
  .version(pkg.version);

export default program;
