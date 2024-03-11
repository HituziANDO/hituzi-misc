/**
 * When the string length is larger than maxLength, it returns the string of which the end is omitted by given `alt`.
 *
 * @param str A string to be processed.
 * @param maxLength The maximum length of the string.
 * @param alt Default alternative string is '…'.
 * @return {string}
 */
export function ellipsis(str: string, maxLength: number, alt = '…') {
  return str.length > maxLength ? str.substring(0, maxLength) + alt : str;
}
