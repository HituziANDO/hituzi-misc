/**
 * Transposes given 2D array.
 *
 * @param array A two-dimensional array.
 * @return Transposed matrix.
 */
export function transpose(array: any[][]): any[][] {
  if (array.length === 0) {
    return [];
  }

  const head = array[0];
  return head.map((_, colIdx) => array.map(row => row[colIdx]));
}
