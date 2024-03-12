/**
 * Get the length of the string in half-width characters.
 * Double-byte characters are counted as two characters.
 *
 * @param text A string to get the length.
 * @return The length of the string in half-width characters.
 */
export function getHalfWidthCharacterLength(text: string): number {
  return text.split('').reduce((sum, char) => {
    // Regular expressions are used to determine full-width characters and
    // match non-ASCII characters (including double-byte characters).
    // Double-byte characters are counted as two characters.
    return sum + (char.match(/[^\x01-\x7E\xA1-\xDF]/) ? 2 : 1);
  }, 0);
}
