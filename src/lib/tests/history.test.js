import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import { getPath } from '../../helpers/path.js';
import History from '../history.js';

const { dirname } = getPath(import.meta.url);
const historyFile = path.resolve(dirname, './history.json');

beforeAll(() => {
  fs.writeFileSync(historyFile, '[]');
});

afterAll(() => {
  fs.unlinkSync(historyFile);
});

describe('History', () => {
  it('Should write and check', () => {
    const history = new History(historyFile, 10);
    const item = Math.random();

    expect(history.exists(item)).toBe(false);

    history.write(item);

    expect(history.exists(item)).toBe(true);
  });

  it('Should pop and unshift items if full', () => {
    const history = new History(historyFile, 2);
    const item1 = Math.random();
    const item2 = Math.random();
    const item3 = Math.random();

    history.write(item1);
    history.write(item2);

    expect(history.exists(item1)).toBe(true);
    expect(history.exists(item3)).toBe(false);

    history.write(item3);

    expect(history.exists(item1)).toBe(false);
    expect(history.exists(item3)).toBe(true);
  });
});
