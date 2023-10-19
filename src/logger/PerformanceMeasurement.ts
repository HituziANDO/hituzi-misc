import { Logger } from './Logger';

/**
 * This class measures the elapsed time for given function or between `start()` method and `end()` method.
 */
export class PerformanceMeasurement {
  private startTime = 0;
  private endTime = 0;

  /**
   * Constructor.
   *
   * @param logger If you want to output the elapsed time to log, specify the logger.
   * @param name Outputs the elapsed time with the name to log.
   */
  constructor(private logger?: Logger, readonly name?: string) {}

  /**
   * Measures the elapsed time for given function.
   *
   * @param func A function to measure.
   * @param logger If you want to output the elapsed time to log, specify the logger.
   * @param name Outputs the elapsed time with the name to log.
   * @return A PerformanceMeasurement instance.
   */
  static measure(func: () => void, logger?: Logger, name?: string): PerformanceMeasurement {
    const measurement = new PerformanceMeasurement(logger, name);
    measurement.start();
    func();
    measurement.end();
    return measurement;
  }

  /**
   * Measures the elapsed time for given async function.
   *
   * @param func An async function to measure.
   * @param logger If you want to output the elapsed time to log, specify the logger.
   * @param name Outputs the elapsed time with the name to log.
   * @return A PerformanceMeasurement instance.
   */
  static async measureAsync(
    func: () => Promise<void>,
    logger?: Logger,
    name?: string,
  ): Promise<PerformanceMeasurement> {
    const measurement = new PerformanceMeasurement(logger, name);
    measurement.start();
    await func();
    measurement.end();
    return measurement;
  }

  /**
   * Starts measuring.
   *
   * @return this.
   */
  start(): PerformanceMeasurement {
    this.startTime = Date.now();
    return this;
  }

  /**
   * Ends measuring.
   *
   * @return this.
   */
  end(): PerformanceMeasurement {
    this.endTime = Date.now();

    const name = this.name ? `[${this.name}] ` : '';
    this.logger?.debug(`${name}Elapsed time: ${this.elapsedInMilliseconds}ms`)();

    return this;
  }

  /**
   * Gets the elapsed time in milliseconds.
   */
  get elapsedInMilliseconds(): number {
    return this.endTime - this.startTime;
  }
}
