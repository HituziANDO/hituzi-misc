/**
 * Generates an array of integers in the range from offset to offset + length - 1.
 *
 * @param length The length of the array.
 * @param offset The offset. The default is 0.
 * @return An array of integers in the range from offset to offset + length - 1.
 */
export function numericArray(length: number, offset = 0): number[] {
  return Array.from(new Array(length)).map((_, idx) => idx + offset);
}
