/**
 * Base error class.
 *
 * @example
 *
 * ```javascript
 * class XxxError extends BaseError {
 * }
 *
 * class YyyError extends BaseError {
 * }
 *
 * try {
 *     something()
 * } catch (e) {
 *     if (e instanceof XxxError) {
 *         // Xxx error handling
 *     } else if (e instanceof YyyError) {
 *         // Yyy error handling
 *     }
 * }
 * ```
 */
export class BaseError extends Error {
  constructor(message?: string) {
    super(message);

    // Override
    this.name = new.target.name;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}
