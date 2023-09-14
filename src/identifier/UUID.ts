/**
 * This class is UUID generator.
 */
export class UUID {
  /**
   * Generates a random UUID.
   *
   * @return {string} UUID version 4 with uppercase.
   */
  static v4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
      .toUpperCase();
  }
}
