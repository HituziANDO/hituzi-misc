import { describe, it, expect } from 'vitest';

import { isArr, isFun, isNum, isObj, isStr } from '../src';

describe('isObj', () => {
  it('returns true when the value is an empty object', () => {
    expect(isObj({})).toBe(true);
  });

  it('returns true when the value is a non-empty object', () => {
    expect(isObj({ name: 'Alice' })).toBe(true);
  });

  it('returns false when the value is an array', () => {
    expect(isObj([])).toBe(false);
  });

  it('returns false when the value is a string', () => {
    expect(isObj('Hello')).toBe(false);
  });

  it('returns false when the value is a number', () => {
    expect(isObj(42)).toBe(false);
  });

  it('returns false when the value is a function', () => {
    expect(isObj(() => {})).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isObj(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isObj(undefined)).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isObj(true)).toBe(false);
  });
});

describe('isArr', () => {
  it('returns true when the value is an empty array', () => {
    expect(isArr([])).toBe(true);
  });

  it('returns true when the value is a non-empty array', () => {
    expect(isArr([1, 2, 3])).toBe(true);
  });

  it('returns false when the value is an object', () => {
    expect(isArr({})).toBe(false);
  });

  it('returns false when the value is a string', () => {
    expect(isArr('Hello')).toBe(false);
  });

  it('returns false when the value is a number', () => {
    expect(isArr(42)).toBe(false);
  });

  it('returns false when the value is a function', () => {
    expect(isArr(() => {})).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isArr(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isArr(undefined)).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isArr(true)).toBe(false);
  });
});

describe('isStr', () => {
  it('returns true when the value is an empty string', () => {
    expect(isStr('')).toBe(true);
  });

  it('returns true when the value is a non-empty string', () => {
    expect(isStr('Hello')).toBe(true);
  });

  it('returns false when the value is a number', () => {
    expect(isStr(42)).toBe(false);
  });

  it('returns false when the value is an object', () => {
    expect(isStr({})).toBe(false);
  });

  it('returns false when the value is an array', () => {
    expect(isStr([])).toBe(false);
  });

  it('returns false when the value is a function', () => {
    expect(isStr(() => {})).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isStr(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isStr(undefined)).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isStr(true)).toBe(false);
  });
});

describe('isNum', () => {
  it('returns true when the value is a positive number', () => {
    expect(isNum(42)).toBe(true);
  });

  it('returns true when the value is a negative number', () => {
    expect(isNum(-42)).toBe(true);
  });

  it('returns true when the value is zero', () => {
    expect(isNum(0)).toBe(true);
  });

  it('returns false when the value is a string', () => {
    expect(isNum('42')).toBe(false);
  });

  it('returns false when the value is an object', () => {
    expect(isNum({})).toBe(false);
  });

  it('returns false when the value is an array', () => {
    expect(isNum([])).toBe(false);
  });

  it('returns false when the value is a function', () => {
    expect(isNum(() => {})).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isNum(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isNum(undefined)).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isNum(true)).toBe(false);
  });
});

describe('isFun', () => {
  it('returns true when the value is a function', () => {
    expect(isFun(() => {})).toBe(true);
  });

  it('returns false when the value is an object', () => {
    expect(isFun({})).toBe(false);
  });

  it('returns false when the value is an array', () => {
    expect(isFun([])).toBe(false);
  });

  it('returns false when the value is a string', () => {
    expect(isFun('Hello')).toBe(false);
  });

  it('returns false when the value is a number', () => {
    expect(isFun(42)).toBe(false);
  });

  it('returns false when the value is null', () => {
    expect(isFun(null)).toBe(false);
  });

  it('returns false when the value is undefined', () => {
    expect(isFun(undefined)).toBe(false);
  });

  it('returns false when the value is a boolean', () => {
    expect(isFun(true)).toBe(false);
  });
});
