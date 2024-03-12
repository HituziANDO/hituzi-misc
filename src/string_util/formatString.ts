/**
 * Formats a string.
 * The part of the string is replaced by specified strings if the `values` argument is specified.
 *
 * @param text A string.
 * @param values String values to replace.
 * @param formatSpecifierPrefix The prefix string of the format specifier. The default of this property is "$". The format specifier becomes $0, $1, ... $n.
 * @return The formatted string.
 */
export function formatString(text: string, values?: string[], formatSpecifierPrefix = '$'): string {
  let str = text;
  values?.forEach((val, i) => {
    str = str.replace(`${formatSpecifierPrefix}${i}`, val);
  });
  return str;
}
