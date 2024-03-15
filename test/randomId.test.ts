import { describe, it, expect } from 'vitest';

import { randomId } from '../src';

describe('randomId', () => {
  it('should generate a random string', () => {
    expect(randomId().length).toEqual(26);
    expect(randomId(5).length).toEqual(5);
    expect(randomId(8).length).toEqual(8);
    expect(randomId(32).length).toEqual(32);
    expect(randomId(128).length).toEqual(128);
  });
});
