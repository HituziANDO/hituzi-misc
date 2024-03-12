/**
 * Returns an array of indexes from 0 to length - 1.
 *
 * @param length The length of the array.
 * @returns An array of indexes from 0 to length - 1.
 */
export function getIndexes(length: number): number[] {
  return Array.from({ length }, (_, i) => i);
}
