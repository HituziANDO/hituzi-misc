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

/**
 * Converts given Promise<T> object to the Promise<Result<T,E>> object.
 *
 * @param promise A promise.
 * @return A Promise<Result> object.
 */
export function tryCatchAsync<T, E extends Error>(promise: Promise<T>): Promise<Result<T, E>> {
  return promise.then(data => success(data)).catch(error => failure(error));
}

/**
 * Returns the data if the result is success. Otherwise, throws the error.
 *
 * @param result A Result object.
 * @return A data.
 * @throws An error.
 */
export function getOrThrow<T, E extends Error>(result: Result<T, E>): T {
  if (result.error) {
    throw result.error;
  }
  return result.data as T;
}

/**
 * Returns the data if the result is success. Otherwise, returns the default value.
 *
 * @param result A Result object.
 * @param defaultValue A default value.
 * @return A data.
 */
export function getOrElse<T, E extends Error>(result: Result<T, E>, defaultValue: T): T {
  return result.data ?? defaultValue;
}
