/**
 * Returns a new array with all duplicate values removed.
 *
 * @param array An array.
 * @return A new array with all duplicate values removed.
 */
export function uniq(array: any[]): any[] {
  const outputs: any[] = [];
  for (const val of array) {
    if (outputs.indexOf(val as never) === -1) outputs.push(val);
  }
  return outputs;
}
