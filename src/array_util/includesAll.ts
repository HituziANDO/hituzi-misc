/**
 * Returns true if all elements of `array1` are included in `array2`.
 *
 * @param array1 An array.
 * @param array2 An array.
 * @return true if all elements of `array1` are included in `array2`.
 */
export function includesAll(array1: any[], array2: any[]): boolean {
  return array1.reduce((included, val) => {
    return included && array2.includes(val);
  }, true);
}
