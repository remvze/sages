import { describe, it, expect } from 'vitest';

import { normalizeAuthors } from '../author.js';

describe('Normalize authors', () => {
  it('Should normalize the list of authors', () => {
    const authors = [
      {
        name: 'John',
        priority: 3,
      },
      {
        name: 'Doe',
        priority: 1,
      },
    ];

    const normalized = normalizeAuthors(authors);
    const expected = { John: 3, Doe: 1 };

    expect(normalized).toEqual(expected);
  });

  it('Should return an empty object if there is no author', () => {
    const normalized = normalizeAuthors([]);

    expect(normalized).toEqual({});
  });
});
