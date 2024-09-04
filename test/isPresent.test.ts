import { describe, it, expect } from 'vitest';

import { isPresent } from '../src';

describe('isPresent', () => {
  it('returns true when the value is a non-empty string', () => {
    expect(isPresent('Hello')).toBe(true);
  });

  it('returns true when the value is a non-zero number', () => {
    expect(isPresent(42)).toBe(true);
  });

  it('returns true when the value is a non-empty object', () => {
    expect(isPresent({ name: 'Alice' })).toBe(true);
  });

  it('returns false when the value is an empty object', () => {
    expect(isPresent({})).toBe(false);
  });

  it('returns true when the value is a non-empty array', () => {
    expect(isPresent([0])).toBe(true);
  });

  it('returns false when the value is an empty array', () => {
    expect(isPresent([])).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isPresent(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isPresent(undefined)).toBe(false);
  });

  it('returns true when the value is a boolean true', () => {
    expect(isPresent(true)).toBe(true);
  });

  it('returns false when the value is a boolean false', () => {
    expect(isPresent(false)).toBe(false);
  });

  it('returns false when the value is zero', () => {
    expect(isPresent(0)).toBe(false);
  });

  it('returns false when the value is an empty string', () => {
    expect(isPresent('')).toBe(false);
  });
});
