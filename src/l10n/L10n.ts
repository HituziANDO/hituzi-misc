import { formatString } from '../string_util/formatString.ts';

/**
 * Localization utility.
 *
 * @example
 *
 * ```javascript
 *  // Define a dictionary of strings used by the app for localization.
 *  const dict = {
 *      "en": {
 *          "hello": "Hello",
 *          "bye": "Goodbye"
 *      },
 *      "ja": {
 *          "hello": "こんにちは",
 *          "bye": "さようなら",
 *          "$0 said hello.": "$0はこんにちはと言った"
 *      }
 *  };
 *
 *  // Register the dictionary to L10n using the language code such as "ja".
 *  L10n.register(dict, "ja");
 *
 *  // Retrieve a string of specified key from the dictionary.
 *  console.log(l10n("hello"));
 *  // => "こんにちは"
 *
 *  // specified the language code.
 *  console.log(l10n("bye", undefined, "en"));
 *  // => "Goodbye"
 *
 *  // with the format specifier.
 *  console.log(l10n("$0 said hello.", ["Alice"]));
 *  // => "Aliceはこんにちはと言った"
 * ```
 *
 */
export class L10n {
  private static dict: { [lang: string]: any } = {};
  private static lang = 'default';

  /**
   * The prefix string of the format specifier.
   * The default of this property is "$". The format specifier becomes $0, $1, ... $n.
   */
  static formatSpecifierPrefix = '$';

  /**
   * Registers a dictionary of strings used by the app for localization.
   * @param dict A dictionary of strings.
   * @param lang The language code such as "ja".
   */
  static register(dict: { [lang: string]: any }, lang?: string) {
    this.dict = dict;
    this.lang = lang || this.lang;
  }

  /**
   * Retrieves a string of specified key from the dictionary.
   * @param key The key in the dictionary.
   * @param lang The language code such as "ja".
   */
  static get(key: string, lang?: string): string {
    const dict = this.dict[lang || this.lang] || this.dict['default'] || {};
    return dict[key] || key;
  }

  /**
   * Retrieves a string of specified key from the dictionary.
   * The part of the string is replaced by specified strings if the `values` argument is specified.
   * @param key The key in the dictionary.
   * @param values String values to replace.
   * @param lang The language code such as "ja".
   */
  static format(key: string, values?: string[], lang?: string): string {
    const str = this.get(key, lang);
    return formatString(str, values, this.formatSpecifierPrefix);
  }
}

/**
 * Retrieves a string of specified key from the dictionary.
 * The part of the string is replaced by specified strings if the `values` argument is specified.
 * @param key The key in the dictionary.
 * @param values String values to replace.
 * @param lang The language code such as "ja".
 */
export const l10n = (key: string, values?: string[], lang?: string): string => {
  return L10n.format(key, values, lang);
};
