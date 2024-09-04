import { describe, it, expect } from 'vitest';

import { isNullOrUndefined } from '../src';

describe('isNullOrUndefined', () => {
  it('returns true when the value is null', () => {
    expect(isNullOrUndefined(null)).toBe(true);
  });

  it('returns true when the value is undefined', () => {
    expect(isNullOrUndefined(undefined)).toBe(true);
  });

  it('returns false when the value is a string', () => {
    expect(isNullOrUndefined('Hello')).toBe(false);
  });

  it('returns false when the value is an empty string', () => {
    expect(isNullOrUndefined('')).toBe(false);
  });

  it('returns false when the value is a number', () => {
    expect(isNullOrUndefined(42)).toBe(false);
  });

  it('returns false when the value is zero', () => {
    expect(isNullOrUndefined(0)).toBe(false);
  });

  it('returns false when the value is an object', () => {
    expect(isNullOrUndefined({})).toBe(false);
  });

  it('returns false when the value is an array', () => {
    expect(isNullOrUndefined([])).toBe(false);
  });

  it('returns false when the value is a function', () => {
    expect(isNullOrUndefined(() => {})).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isNullOrUndefined(true)).toBe(false);
  });
});
