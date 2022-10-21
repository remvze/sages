#!/usr/bin/env node

import program from '../src/index.js';

program.parse(process.argv);

if (process.argv.length < 3) {
  program.help();
}
