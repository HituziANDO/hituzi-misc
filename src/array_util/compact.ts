/**
 * Returns a new array with null and undefined removed.
 *
 * @param array An array.
 * @return A new array with null and undefined removed.
 */
export function compact(array: any[]): any[] {
  return array.filter(val => val !== null && val !== undefined);
}
