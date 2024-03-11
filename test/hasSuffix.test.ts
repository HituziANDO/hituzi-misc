import { describe, it, expect } from 'vitest';

import { hasSuffix } from '../src';

describe('hasSuffix', () => {
  it('returns true when the string has the given suffix', () => {
    expect(hasSuffix('Hello world', 'world')).toBe(true);
  });

  it('returns false when the string does not have the given suffix', () => {
    expect(hasSuffix('Hello world', 'Hello')).toBe(false);
  });

  it('returns false when the string is empty', () => {
    expect(hasSuffix('', 'world')).toBe(false);
  });

  it('returns true when the suffix is empty', () => {
    expect(hasSuffix('Hello world', '')).toBe(true);
  });

  it('returns true when both the string and the suffix are empty', () => {
    expect(hasSuffix('', '')).toBe(true);
  });
});
