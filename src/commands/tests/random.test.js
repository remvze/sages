import { describe, it, expect } from 'vitest';

import { sex, priority } from '../../data/const';
import { normalizeOptions } from '../random';

describe('Normalize options', () => {
  it('Should normalize the sex', () => {
    const options1 = { sex: 'female' };
    const options2 = { sex: 'f' };
    const options3 = { sex: 'foo' };

    expect(normalizeOptions(options1)).toEqual({
      sex: sex.female,
      priority: null,
    });

    expect(normalizeOptions(options2)).toEqual({
      sex: sex.female,
      priority: null,
    });

    expect(normalizeOptions(options3)).toEqual({ sex: null, priority: null });
  });

  it('Should normalize the sex', () => {
    const options1 = { priority: 'high' };
    const options2 = { priority: 'HIGH' };
    const options3 = { priority: 'foo' };

    expect(normalizeOptions(options1)).toEqual({
      sex: null,
      priority: priority.high,
    });

    expect(normalizeOptions(options2)).toEqual({
      sex: null,
      priority: priority.high,
    });

    expect(normalizeOptions(options3)).toEqual({ sex: null, priority: null });
  });

  it('Should normalize both sex and priority', () => {
    const options1 = { priority: 'high', sex: 'FEMALE' };
    const options2 = { priority: 'LOW', sex: 'male' };

    expect(normalizeOptions(options1)).toEqual({
      sex: sex.female,
      priority: priority.high,
    });

    expect(normalizeOptions(options2)).toEqual({
      sex: sex.male,
      priority: priority.low,
    });
  });
});
