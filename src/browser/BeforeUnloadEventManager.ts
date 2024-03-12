import { isNodeJs } from '../env/isNodeJs.ts';

/**
 * Options for BeforeUnloadEventManager.
 */
export type BeforeUnloadEventManagerOptions = {
  /**
   * A function to determine whether the beforeunload event can be shown.
   */
  canShow?: () => boolean;
};

/**
 * A class to manage the beforeunload event.
 * This class is available only in a browser environment.
 *
 * @example
 *
 * ```javascript
 * const manager = BeforeUnloadEventManager.newInstance();
 * if (manager) {
 *   manager.enable();
 *   // ...
 *   manager.disable();
 * }
 * ```
 */
export class BeforeUnloadEventManager {
  private constructor(private options?: BeforeUnloadEventManagerOptions) {}

  /**
   * Returns a new instance of BeforeUnloadEventManager if the current environment is a browser.
   *
   * @param options Options.
   * @return A new instance of BeforeUnloadEventManager if the current environment is a browser. Otherwise, undefined.
   */
  static newInstance(
    options?: BeforeUnloadEventManagerOptions,
  ): BeforeUnloadEventManager | undefined {
    if (isNodeJs()) {
      return undefined;
    } else {
      return new BeforeUnloadEventManager(options);
    }
  }

  /**
   * Enables the event listener.
   */
  enable() {
    window.addEventListener('beforeunload', this.onBeforeUnload);
  }

  /**
   * Disables the event listener.
   */
  disable() {
    window.removeEventListener('beforeunload', this.onBeforeUnload);
  }

  private onBeforeUnload(event: BeforeUnloadEvent) {
    const canShow = this.options?.canShow || (() => true);

    if (canShow()) {
      // Cancel the event as stated by the standard.
      event.preventDefault();
      // Chrome requires returnValue to be set.
      event.returnValue = '';
    }
  }
}
