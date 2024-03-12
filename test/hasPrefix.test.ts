import { describe, it, expect } from 'vitest';

import { hasPrefix } from '../src';

describe('hasPrefix', () => {
  it('returns true when the string has the given prefix', () => {
    expect(hasPrefix('Hello world', 'Hello')).toBe(true);
  });

  it('returns false when the string does not have the given prefix', () => {
    expect(hasPrefix('Hello world', 'world')).toBe(false);
  });

  it('returns false when the string is empty', () => {
    expect(hasPrefix('', 'Hello')).toBe(false);
  });

  it('returns true when the prefix is empty', () => {
    expect(hasPrefix('Hello world', '')).toBe(true);
  });

  it('returns true when both the string and the prefix are empty', () => {
    expect(hasPrefix('', '')).toBe(true);
  });
});
