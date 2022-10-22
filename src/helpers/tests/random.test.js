import { describe, it, expect } from 'vitest';

import { shuffle, selectRandom } from '../random.js';

describe('Shuffle function', () => {
  it('Should return an array with the same size', () => {
    const array = [0, 1, 2, 3];
    const shuffled = shuffle(array);

    expect(array.length).toBe(shuffled.length);
  });

  it('Should contain all items', () => {
    const array = [0, 1, 2, 3];
    const shuffled = shuffle(array);
    let containsAll = true;

    array.forEach(item => {
      if (!shuffled.includes(item)) containsAll = false;
    });

    expect(containsAll).toBe(true);
  });

  it('Should return an empty array if there is no items', () => {
    const shuffled = shuffle([]);

    expect(shuffled.length).toBe(0);
  });
});

describe('Weighted random function', () => {
  it('Should return one of the keys', () => {
    const items = { foo: 1, bar: 2 };
    const random = selectRandom(items);

    expect(random in items).toBe(true);
  });

  it('Should convert all weights to number', () => {
    const items = { foo: 1, bar: '2' };
    const random = selectRandom(items);

    expect(items[random]).toBeTruthy();
  });

  it('Should return null if there is no item', () => {
    const items = {};
    const random = selectRandom(items);

    expect(random).toBeNull();
  });
});
