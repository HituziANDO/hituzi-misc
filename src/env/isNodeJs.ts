/**
 * Returns true if the current environment is Node.js.
 *
 * @return true if the current environment is Node.js. Otherwise, false.
 */
export function isNodeJs(): boolean {
  return typeof process !== 'undefined' && process.versions && !!process.versions.node;
}
