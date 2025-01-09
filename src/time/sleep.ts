import { TimeUnit } from './TimeUnit';
import toMilliseconds from './toMilliseconds';

/**
 * Sleep for a specified time.
 *
 * @param time Time to sleep.
 * @param unit Time unit.
 * @returns Promise that resolves after the specified time.
 */
export default function sleep(time: number, unit: TimeUnit = TimeUnit.Milliseconds): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, toMilliseconds(time, unit)));
}
