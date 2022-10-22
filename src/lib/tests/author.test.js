import { describe, it, expect } from 'vitest';

import { normalizeAuthors, selectRandomAuthor } from '../author.js';
import history from './mocks/history.js';

const authors = [
  {
    name: 'John',
    priority: 3,
    sex: 'male',
  },
  {
    name: 'Doe',
    priority: 1,
    sex: 'female',
  },
];

describe('Normalize authors', () => {
  it('Should normalize the list of authors', () => {
    const normalized = normalizeAuthors(authors);
    const expected = { John: 3, Doe: 1 };

    expect(normalized).toEqual(expected);
  });

  it('Should return an empty object if there is no author', () => {
    const normalized = normalizeAuthors([]);

    expect(normalized).toEqual({});
  });
});

describe('Select a random author', () => {
  it('Should select an author', () => {
    const author = selectRandomAuthor(authors, history);
    const exists = authors.some(a => a.name == author);

    expect(exists).toBe(true);
  });

  it('Should return null if authors list is empty', () => {
    const author = selectRandomAuthor([], history);

    expect(author).toBeNull();
  });

  it('Should return author according to the given sex', () => {
    const male = selectRandomAuthor(authors, history, 'male');
    const female = selectRandomAuthor(authors, history, 'female');
    const maleObject = authors.find(author => author.name === male);
    const femaleObject = authors.find(author => author.name === female);

    expect(maleObject.sex).toBe('male');
    expect(femaleObject.sex).toBe('female');
  });
});
