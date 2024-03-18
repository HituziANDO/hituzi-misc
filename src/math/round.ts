/**
 * Round a number to a specified number of decimal digits.
 *
 * @example
 *
 * ```javascript
 * round(1.2345); // 1
 * round(1.5678); // 2
 * round(1.2345, 2); // 1.23
 * round(1.5678, 2); // 1.57
 * ```
 *
 * @param val A number to round.
 * @param decimalDigits The number of decimal digits to round to.
 * @returns The rounded number.
 */
export const round = (val: number, decimalDigits = 0) => {
  const x = Math.pow(10, decimalDigits);
  return Math.round(val * x) / x;
};
