/**
 * Converts a date to an ISO string in UTC timezone.
 * For example,
 *
 * ```javascript
 * const str = toISOStringInUTC(new Date()); // '2024-04-23T15:01:02.886Z'
 * ```
 *
 * @param date A date to convert.
 * @returns An ISO string in UTC timezone.
 */
export function toISOStringInUTC(date: Date): string {
  return date.toISOString();
}
