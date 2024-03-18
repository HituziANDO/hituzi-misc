import { describe, it, expect } from 'vitest';

import { round } from '../src/math/round';

describe('round', () => {
  it('returns the rounded integer when decimalDigits is not provided', () => {
    expect(round(1.2345)).toBe(1);
    expect(round(1.5678)).toBe(2);
  });

  it('returns the number rounded to the given decimal place', () => {
    expect(round(1.2345, 2)).toBe(1.23);
    expect(round(1.5678, 2)).toBe(1.57);
  });

  it('returns the rounded number when the number is negative', () => {
    expect(round(-1.2345, 2)).toBe(-1.23);
    expect(round(-1.5678, 2)).toBe(-1.57);
  });

  it('returns zero when the number is zero', () => {
    expect(round(0)).toBe(0);
  });
});
