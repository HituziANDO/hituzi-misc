/**
 * Convert seconds to hours, minutes and seconds.
 *
 * @param seconds A seconds.
 * @returns An object that contains hours, minutes and seconds.
 */
export function secondsToHMS(seconds: number): {
  hour: number;
  minute: number;
  second: number;
} {
  const hour = Math.floor(seconds / 60 / 60);
  const minute = (seconds / 60) % 60;
  const second = seconds % 60;
  return { hour, minute, second };
}

/**
 * Convert milliseconds to hours, minutes and seconds.
 *
 * @param milliseconds A milliseconds.
 * @returns An object that contains hours, minutes and seconds.
 */
export function millisecondsToHMS(milliseconds: number): {
  hour: number;
  minute: number;
  second: number;
} {
  return secondsToHMS(milliseconds / 1000.0);
}
