/**
 * Check if a value is present. A value is considered present if it is not null, undefined, false, zero, or an empty string.
 *
 * @param value A value to check.
 * @returns true if the value is not null, undefined, false, zero, or an empty string. Otherwise, false.
 */
export function isPresent(value: any): boolean {
  return !!value;
}
