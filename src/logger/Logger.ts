import { isNodeJs } from '../env/isNodeJs';
import { isObj, isArr } from '../type/type_check';

/**
 * Constants for log level.
 */
export const LogLevel = {
  /**
   * Outputs all logs.
   */
  Debug: 0,
  /**
   * Outputs info, warn, and error logs.
   */
  Info: 1,
  /**
   * Outputs warn and error logs.
   */
  Warn: 2,
  /**
   * Outputs error logs.
   */
  Error: 3,
  /**
   * Outputs no logs.
   */
  Off: 99,
} as const;
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * A logger class.
 *
 * @example
 *
 * ```javascript
 * Logger.default.level = LogLevel.Debug;
 *
 * // Outputs debug logs.
 * Logger.default.debug("Hello, world!")();
 *
 * // Outputs info logs.
 * Logger.default.info("Hello, world!")();
 *
 * // Outputs warn logs.
 * Logger.default.warn("Hello, world!")();
 *
 * // Outputs error logs.
 * Logger.default.error("Hello, world!")();
 *
 * // Outputs no logs.
 * Logger.default.level = LogLevel.Off;
 * ```
 */
export class Logger {
  /**
   * Log level. Default is Off.
   */
  level: LogLevel = LogLevel.Off;

  /**
   * Gets the singleton instance.
   */
  static readonly default = new Logger();

  constructor() {}

  /**
   * Outputs debug logs.
   *
   * @param msg A message to output.
   */
  debug(msg: any) {
    if (isObj(msg) || isArr(msg)) {
      msg = this.stringify(msg);
    }

    const console = getConsole();

    return LogLevel.Debug >= this.level
      ? console.log.bind(console, `%c[DEBUG] ${msg}`, 'color:#54a0ff;')
      : this.noop;
  }

  /**
   * Outputs info logs.
   *
   * @param msg A message to output.
   */
  info(msg: any) {
    if (isObj(msg) || isArr(msg)) {
      msg = this.stringify(msg);
    }

    const console = getConsole();

    return LogLevel.Info >= this.level
      ? console.log.bind(console, `%c[INFO] ${msg}`, 'color:#00d2d3;')
      : this.noop;
  }

  /**
   * Outputs warn logs.
   *
   * @param msg A message to output.
   */
  warn(msg: any) {
    if (isObj(msg) || isArr(msg)) {
      msg = this.stringify(msg);
    }

    const console = getConsole();

    return LogLevel.Warn >= this.level
      ? console.log.bind(console, `%c[WARN] ${msg}`, 'color:#ff9f43;')
      : this.noop;
  }

  /**
   * Outputs error logs.
   *
   * @param msg A message to output.
   */
  error(msg: any) {
    if (isObj(msg) || isArr(msg)) {
      msg = this.stringify(msg);
    }

    const console = getConsole();

    return LogLevel.Error >= this.level
      ? console.log.bind(console, `%c[ERROR] ${msg}`, 'color:#ee5253; font-weight:bold;')
      : this.noop;
  }

  private stringify(msg: any): string {
    return JSON.stringify(msg, null, 2);
  }

  private noop() {}
}

function getConsole(): Console {
  return isNodeJs() ? console : window.console;
}
