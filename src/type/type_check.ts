/**
 * Tells whether the type of specified value is Object.
 *
 * @param val A value to check.
 * @returns true if the type of specified value is Object. Otherwise, false.
 */
export function isObj(val: any): boolean {
  return {}.toString.call(val) === '[object Object]';
}

/**
 * Tells whether the type of specified value is Array.
 *
 * @param val A value to check.
 * @returns true if the type of specified value is Array. Otherwise, false.
 */
export function isArr(val: any): boolean {
  return {}.toString.call(val) === '[object Array]';
}

/**
 * Tells whether the type of specified value is String.
 *
 * @param val A value to check.
 * @returns true if the type of specified value is String. Otherwise, false.
 */
export function isStr(val: any): boolean {
  return {}.toString.call(val) === '[object String]';
}

/**
 * Tells whether the type of specified value is Number.
 *
 * @param val A value to check.
 * @returns true if the type of specified value is Number. Otherwise, false.
 */
export function isNum(val: any): boolean {
  return {}.toString.call(val) === '[object Number]';
}

/**
 * Tells whether the type of specified value is Function.
 *
 * @param val A value to check.
 * @returns true if the type of specified value is Function. Otherwise, false.
 */
export function isFun(val: any): boolean {
  return {}.toString.call(val) === '[object Function]';
}
