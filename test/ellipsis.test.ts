import { describe, it, expect } from 'vitest';

import { ellipsis } from '../src';

describe('ellipsis', () => {
  it('returns the string with alt when the string length is larger than maxLength', () => {
    expect(ellipsis('Hello world', 5)).toBe('Hello…');
  });

  it('returns the original string when the string length is less than maxLength', () => {
    expect(ellipsis('Hello world', 20)).toBe('Hello world');
  });

  it('returns the original string when the string length is equal to maxLength', () => {
    expect(ellipsis('Hello world', 11)).toBe('Hello world');
  });

  it('returns the empty string when the string is empty', () => {
    expect(ellipsis('', 5)).toBe('');
  });

  it('returns the string with alt when the maxLength is zero', () => {
    expect(ellipsis('Hello world', 0)).toBe('…');
  });
});
