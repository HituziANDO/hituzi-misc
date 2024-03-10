import { describe, it, expect, beforeAll } from 'vitest';

import { DatetimeFormatter } from '../src';

describe('DatetimeFormatter', () => {
  beforeAll(() => {});

  describe('format', () => {
    it('Date to string', () => {
      const df = new DatetimeFormatter('yyyy-MM-dd HH:mm:ss SSS');
      // month: monthIndex (January = 0)
      const date = new Date(1995, 10, 17, 3, 24, 5, 90);
      const str = df.format(date);

      expect(str).toBe('1995-11-17 03:24:05 090');
    });
  });

  describe('parse', () => {
    it('string to Date', () => {
      const df = new DatetimeFormatter('yyyy-MM-dd HH:mm:ss SSS');
      const date = df.parse('1995-11-17 03:24:05 002');

      expect(date).not.toBeNull();
      expect(date?.getFullYear()).toBe(1995);
      expect(date?.getMonth()).toBe(10); // monthIndex (January = 0)
      expect(date?.getDate()).toBe(17);
      expect(date?.getHours()).toBe(3);
      expect(date?.getMinutes()).toBe(24);
      expect(date?.getSeconds()).toBe(5);
      expect(date?.getMilliseconds()).toBe(2);
    });

    it('Empty string to null', () => {
      const df = new DatetimeFormatter('yyyy-MM-dd HH:mm:ss SSS');

      expect(df.parse('')).toBeNull();
    });
  });
});
