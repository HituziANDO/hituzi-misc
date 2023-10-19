import { commaSeparated } from '../src';

describe('commaSeparated', () => {
  it('should convert given numerical value a character string that delimited by the comma every three digits', () => {
    const str = commaSeparated(1234567890);
    expect(str).toBe('1,234,567,890');
  });

  it('should convert given numerical value as string a character string that delimited by the comma every three digits', () => {
    const str = commaSeparated('1234567890');
    expect(str).toBe('1,234,567,890');
  });

  it('should not convert given string that is not numeric', () => {
    const str = commaSeparated('test');
    expect(str).toBe('test');
  });
});
