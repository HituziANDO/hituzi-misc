export class ArrayUtils {
  /**
   * Transposes given 2D array.
   *
   * @param array A two-dimensional array.
   * @return Transposed matrix.
   */
  static transpose(array: any[][]): any[][] {
    if (array.length === 0) {
      return [];
    }

    const head = array[0];
    return head.map((_, colIdx) => array.map(row => row[colIdx]));
  }

  /**
   * Returns true if all elements of `array1` are included in `array2`.
   *
   * @param array1 An array.
   * @param array2 An array.
   * @return true if all elements of `array1` are included in `array2`.
   */
  static includesAll(array1: any[], array2: any[]): boolean {
    return array1.reduce((included, val) => {
      return included && array2.includes(val);
    }, true);
  }

  /**
   * Returns a new array with all duplicate values removed.
   *
   * @param array An array.
   * @return A new array with all duplicate values removed.
   */
  static uniq(array: any[]): any[] {
    const outputs: any[] = [];
    for (const val of array) {
      if (outputs.indexOf(val as never) === -1) outputs.push(val);
    }
    return outputs;
  }

  /**
   * Returns a new array with null and undefined removed.
   *
   * @param array An array.
   * @return A new array with null and undefined removed.
   */
  static compact(array: any[]): any[] {
    return array.filter(val => val !== null && val !== undefined);
  }
}
