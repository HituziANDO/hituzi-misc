/**
 * Checks if a value is null or undefined.
 *
 * @param value A value to check.
 * @returns true if a value is null or undefined. Otherwise, false.
 */
export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}
