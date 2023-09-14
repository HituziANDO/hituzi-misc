/**
 * Result is a type with either data or error.
 * When an error occurs, the error property is set. It is not null and undefined.
 */
export type Result<T, E extends Error> = { data?: T; error?: E };

/**
 * Returns a Result object as success.
 * @param data A data. Nullable.
 * @return A Result object.
 */
export function success<T>(data?: T): Result<T, never> {
  return { data };
}

/**
 * Returns a Result object as failure.
 * @param error An error. Nonnull.
 * @return A Result object.
 */
export function failure<E extends Error>(error: E): Result<never, E> {
  return { error };
}

/**
 * Wraps throwable function with try-catch block and converts to the Result object.
 * If an error is thrown by given function, this function returns the result as failure has the error.
 * @param throwable A function that may throw an error.
 * @return A Result object.
 */
export function tryCatch<T, E extends Error>(throwable: () => T): Result<T, E> {
  try {
    const data = throwable();
    return { data };
  } catch (e) {
    return { error: e as E };
  }
}
