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
    const male = selectRandomAuthor(authors, history, { sex: 'male' });
    const female = selectRandomAuthor(authors, history, { sex: 'female' });

    const maleObject = authors.find(author => author.name === male);
    const femaleObject = authors.find(author => author.name === female);

    expect(maleObject.sex).toBe('male');
    expect(femaleObject.sex).toBe('female');
  });

  it('Should return author according to the given priority', () => {
    const low = selectRandomAuthor(authors, history, { priority: 1 });
    const medium = selectRandomAuthor(authors, history, { priority: 2 });
    const high = selectRandomAuthor(authors, history, { priority: 3 });

    const lowObject = authors.find(author => author.name === low);
    const highObject = authors.find(author => author.name === high);

    expect(lowObject.priority).toBe(1);
    expect(medium).toBeNull();
    expect(highObject.priority).toBe(3);
  });

  it('Should filter based on both sex and priority', () => {
    const author1 = selectRandomAuthor(authors, history, {
      priority: 1,
      sex: 'female',
    });
    const author1Object = authors.find(author => author.name === author1);

    const author2 = selectRandomAuthor(authors, history, {
      priority: 3,
      sex: 'female',
    });

    expect(author1Object.sex).toBe('female');
    expect(author1Object.priority).toBe(1);
    expect(author2).toBeNull();
  });
});
