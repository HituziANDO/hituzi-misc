import { isArr, isObj, isStr } from '../type/type_check';

/**
 * Checks if a value is present.
 * A value is considered present if it is not null, undefined, false, zero, an empty string, an empty array, or an empty object.
 *
 * @param value A value to check.
 * @returns true if the value is not null, undefined, false, zero, an empty string, an empty array, or an empty object. Otherwise, false.
 */
export function isPresent(value: any): boolean {
  if (value === null || value === undefined || value === false || value === 0) {
    return false;
  } else if (isStr(value) && value === '') {
    return false;
  } else if (isArr(value) && value.length === 0) {
    return false;
  } else if (isObj(value) && Object.keys(value).length === 0) {
    return false;
  } else {
    return true;
  }
}
