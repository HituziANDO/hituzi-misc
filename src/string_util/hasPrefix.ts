/**
 * Tests that the string has a given prefix.
 *
 * @param str A string to test.
 * @param prefix A prefix string to match.
 * @return Returns true if the string has a given prefix, otherwise false.
 */
export function hasPrefix(str: string, prefix: string) {
  return (' ' + str.split(' ').join('')).indexOf(' ' + prefix) !== -1;
}
