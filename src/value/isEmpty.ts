import { isPresent } from './isPresent';

/**
 * Checks if a value is empty.
 * A value is considered empty if it is null, undefined, false, zero, an empty string, an empty array, or an empty object.
 *
 * @param value A value to check.
 * @returns true if the value is null, undefined, false, zero, an empty string, an empty array, or an empty object. Otherwise, false.
 */
export function isEmpty(value: any): boolean {
  return !isPresent(value);
}
