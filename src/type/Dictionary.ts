/**
 * Dictionary class is a simple wrapper of `{ [key: string]: T }`.
 */
export class Dictionary<T> {
  private dict: { [key: string]: T } = {};

  /**
   * Registers a value to the dictionary.
   * @param value A value.
   * @param key A key.
   * @return this
   */
  put(value: T, key: string): Dictionary<T> {
    this.dict[key] = value;
    return this;
  }

  /**
   * Gets a value associated with specified key from the dictionary.
   * If the key does not exist, returns undefined.
   * @param key A key.
   * @return A value associated with the key.
   */
  get(key: string): T | undefined {
    return this.dict[key];
  }

  /**
   * Gets a value associated with specified key and removes the value from the dictionary.
   * If the key does not exist, returns undefined.
   * @param key A key.
   * @return A value associated with the key.
   */
  drop(key: string): T | undefined {
    const value = this.dict[key];
    delete this.dict[key];
    return value;
  }

  /**
   * Removes a value associated with specified key from the dictionary.
   * @param key A key.
   * @return this
   */
  remove(key: string): Dictionary<T> {
    delete this.dict[key];
    return this;
  }

  /**
   * Removes all values from the dictionary.
   * @return this
   */
  removeAll(): Dictionary<T> {
    this.dict = {};
    return this;
  }

  /**
   * Returns true if the dictionary contains the specified key.
   * @param key A key.
   * @return true if the dictionary contains the specified key, otherwise false.
   */
  contains(key: string): boolean {
    return key in this.dict;
  }

  /**
   * Returns all keys in the dictionary.
   * @return All keys in the dictionary.
   */
  keys(): string[] {
    return Object.keys(this.dict);
  }

  /**
   * Returns all values in the dictionary.
   * @return All values in the dictionary.
   */
  values(): T[] {
    return Object.keys(this.dict).map(key => this.dict[key]);
  }
}

/**
 * A temporary dictionary in the memory. It is available in global scope.
 */
export const Tmp = new Dictionary<any>();
