import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect, afterAll } from 'vitest';

import { getPath } from '../../helpers/path.js';
import History from '../history.js';

const { dirname } = getPath(import.meta.url);
const historyFile = path.resolve(dirname, './history.json');

afterAll(() => {
  fs.unlinkSync(historyFile);
});

describe('History', () => {
  it('Should write and check', () => {
    const history = new History(historyFile, 10, 'test');
    const item = Math.random();

    expect(history.exists(item)).toBe(false);

    history.write(item);

    expect(history.exists(item)).toBe(true);
  });

  it('Should pop and unshift items if full', () => {
    const history = new History(historyFile, 2, 'test');
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

  it('Should check all names', () => {
    const history = new History(historyFile, 3, 'test');
    const items = new Array(3).fill(0).map(() => Math.random());

    history.write(items[0]);
    history.write(items[1]);

    expect(history.allExist([items[0], items[1]])).toBe(true);
    expect(history.allExist([items[0], items[1], items[2]])).toBe(false);
  });

  it('Should empty the history', () => {
    const history = new History(historyFile, 5, 'test');

    const items = new Array(5).fill(0).map(() => Math.random());

    items.forEach(item => history.write(item));

    expect(history.getHistory().test.length).toBeGreaterThan(0);

    history.empty();

    expect(history.getHistory().test.length).toBe(0);
  });
});
