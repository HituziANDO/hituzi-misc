/**
 * Checks if specified text is null, undefined, or empty string.
 *
 * @param text A text to check.
 * @returns true if the text is null, undefined, or empty string. Otherwise, false.
 */
export function isTextEmpty(text: string | null | undefined): boolean {
  return text === undefined || text === null || text === '';
}
