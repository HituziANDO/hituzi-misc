import { isPresent } from './isPresent';

/**
 * Check if a value is empty. A value is considered empty if it is null, undefined, false, zero, or an empty string.
 *
 * @param value A value to check.
 * @returns true if the value is null, undefined, false, zero, or an empty string. Otherwise, false.
 */
export function isEmpty(value: any): boolean {
  return !isPresent(value);
}
