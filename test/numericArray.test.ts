import { numericArray } from '../src';

describe('numericArray', () => {
  it('should generate an array of integers in the range', () => {
    const array = numericArray(4);
    expect(array).toEqual([0, 1, 2, 3]);
  });

  it('should generate an array of integers in the range with offset', () => {
    const array = numericArray(4, 1);
    expect(array).toEqual([1, 2, 3, 4]);
  });
});
