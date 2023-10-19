/**
 * Make given numerical value a character string that delimited by the comma every three digits.
 *
 * @param val Numerical value.
 * @return comma separated string.
 */
export function commaSeparated(val: number | string): string {
  let str = ('' + val).replace(/,/g, '').replace(/\s/g, '');
  while (str != (str = str.replace(/^(-?\d+)(\d{3})/, '$1,$2'))) {}
  return str;
}
