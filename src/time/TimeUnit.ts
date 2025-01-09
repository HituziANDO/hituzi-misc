/**
 * Time unit.
 */
export const TimeUnit = {
  Milliseconds: 'ms',
  Seconds: 's',
  Minutes: 'm',
  Hours: 'h',
  Days: 'd',
} as const;
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit];
