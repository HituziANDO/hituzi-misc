import { describe, it, expect } from 'vitest';

import { isEmpty } from '../src';

describe('isEmpty', () => {
  it('returns true when the value is null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true when the value is undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('returns true when the value is a boolean false', () => {
    expect(isEmpty(false)).toBe(true);
  });

  it('returns true when the value is zero', () => {
    expect(isEmpty(0)).toBe(true);
  });

  it('returns true when the value is an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns true when the value is an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns true when the value is an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns false when the value is a non-empty string', () => {
    expect(isEmpty('Hello')).toBe(false);
  });

  it('returns false when the value is a non-zero number', () => {
    expect(isEmpty(42)).toBe(false);
  });

  it('returns false when the value is a non-empty object', () => {
    expect(isEmpty({ name: 'Alice' })).toBe(false);
  });

  it('returns false when the value is a non-empty array', () => {
    expect(isEmpty([0])).toBe(false);
  });

  it('returns false when the value is a boolean true', () => {
    expect(isEmpty(true)).toBe(false);
  });
});
