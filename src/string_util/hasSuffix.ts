/**
 * Tests that the string has a given suffix.
 *
 * @param str A string to test.
 * @param suffix A suffix string to match.
 * @return Returns true if the string has a given suffix, otherwise false.
 */
export function hasSuffix(str: string, suffix: string) {
  return (str.split(' ').join('') + ' ').indexOf(suffix + ' ') !== -1;
}
