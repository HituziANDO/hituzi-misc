import { describe, it, expect } from 'vitest';

import { TimeUnit } from '../src';
import toMilliseconds from '../src/time/toMilliseconds';

describe('toMilliseconds', () => {
  it('returns the same value when the unit is milliseconds', () => {
    expect(toMilliseconds(1000, TimeUnit.Milliseconds)).toBe(1000);
  });

  it('converts seconds to milliseconds', () => {
    expect(toMilliseconds(1, TimeUnit.Seconds)).toBe(1000);
  });

  it('converts minutes to milliseconds', () => {
    expect(toMilliseconds(1, TimeUnit.Minutes)).toBe(60000);
  });

  it('converts hours to milliseconds', () => {
    expect(toMilliseconds(1, TimeUnit.Hours)).toBe(3600000);
  });

  it('converts days to milliseconds', () => {
    expect(toMilliseconds(1, TimeUnit.Days)).toBe(86400000);
  });

  it('returns 0 when the time is 0 regardless of the unit', () => {
    expect(toMilliseconds(0, TimeUnit.Seconds)).toBe(0);
    expect(toMilliseconds(0, TimeUnit.Minutes)).toBe(0);
    expect(toMilliseconds(0, TimeUnit.Hours)).toBe(0);
    expect(toMilliseconds(0, TimeUnit.Days)).toBe(0);
  });

  it('defaults to milliseconds when no unit is provided', () => {
    expect(toMilliseconds(500)).toBe(500);
  });
});
