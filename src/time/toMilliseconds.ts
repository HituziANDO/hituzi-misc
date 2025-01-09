import { TimeUnit } from './TimeUnit';

/**
 * Convert time to milliseconds.
 *
 * @param time Time to convert.
 * @param unit Time unit.
 * @returns Time in milliseconds.
 */
export default function toMilliseconds(
  time: number,
  unit: TimeUnit = TimeUnit.Milliseconds,
): number {
  let timeMs = 0;
  switch (unit) {
    case TimeUnit.Milliseconds:
      timeMs = time;
      break;
    case TimeUnit.Seconds:
      timeMs = time * 1000;
      break;
    case TimeUnit.Minutes:
      timeMs = time * 1000 * 60;
      break;
    case TimeUnit.Hours:
      timeMs = time * 1000 * 60 * 60;
      break;
    case TimeUnit.Days:
      timeMs = time * 1000 * 60 * 60 * 24;
      break;
  }
  return timeMs;
}
