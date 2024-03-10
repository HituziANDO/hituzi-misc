import { describe, it, expect, beforeEach } from 'vitest';

import { Dictionary } from '../src';

describe('Dictionary', () => {
  let dict: Dictionary<number>;

  beforeEach(() => {
    dict = new Dictionary<number>();
  });

  it('should register a value to the dictionary', () => {
    dict.put(1, 'one');
    expect(dict.get('one')).toBe(1);
  });

  it('should get a value associated with specified key from the dictionary', () => {
    dict.put(2, 'two');
    expect(dict.get('two')).toBe(2);
  });

  it('should return undefined if the key does not exist', () => {
    expect(dict.get('non-existent')).toBeUndefined();
  });

  it('should get a value associated with specified key and remove it from the dictionary', () => {
    dict.put(3, 'three');
    expect(dict.drop('three')).toBe(3);
    expect(dict.get('three')).toBeUndefined();
  });

  it('should remove a value associated with specified key from the dictionary', () => {
    dict.put(4, 'four');
    dict.remove('four');
    expect(dict.get('four')).toBeUndefined();
  });

  it('should remove all values from the dictionary', () => {
    dict.put(5, 'five');
    dict.put(6, 'six');
    dict.removeAll();
    expect(dict.get('five')).toBeUndefined();
    expect(dict.get('six')).toBeUndefined();
  });

  it('should return true if the dictionary contains the specified key', () => {
    dict.put(7, 'seven');
    expect(dict.contains('seven')).toBe(true);
  });

  it('should return false if the dictionary does not contain the specified key', () => {
    expect(dict.contains('non-existent')).toBe(false);
  });

  it('should return all keys in the dictionary', () => {
    dict.put(8, 'eight');
    dict.put(9, 'nine');
    expect(dict.keys()).toEqual(['eight', 'nine']);
  });

  it('should return all values in the dictionary', () => {
    dict.put(10, 'ten');
    dict.put(11, 'eleven');
    expect(dict.values()).toEqual([10, 11]);
  });
});
