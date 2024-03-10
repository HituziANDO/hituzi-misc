/**
 * This class is a datetime formatter.
 *
 * BASED ON:
 *
 * --------------------------------------------------------
 * dateformat.js - Simple date formatter
 * Version 1.1 (Update 2008/04/02)
 *
 * Copyright (c) 2007-2008 onozaty (http://www.enjoyxstudy.com)
 *
 * Released under an MIT-style license.
 *
 * For details, see the web site:
 * http://www.enjoyxstudy.com/javascript/dateformat/
 *
 * --------------------------------------------------------
 *
 * ### patterns
 *
 * ```
 * y : Year         ex. "yyyy" -> "2007", "yy" -> "07"
 * M : Month        ex. "MM" -> "05" "12", "M" -> "5" "12"
 * d : Day          ex. "dd" -> "09" "30", "d" -> "9" "30"
 * H : Hour (0-23)  ex. "HH" -> "00" "23", "H" -> "0" "23"
 * m : Minute       ex. "mm" -> "01" "59", "m" -> "1" "59"
 * s : Second       ex. "ss" -> "00" "59", "H" -> "0" "59"
 * S : Millisecond  ex. "SSS" -> "000" "012" "999", "SS" -> "00" "12" "999", "S" -> "0" "12" "999"
 * ```
 *
 * Text can be quoted using single quotes (') to avoid interpretation.
 * "''" represents a single quote.
 *
 * ### Usage
 *
 * ```javascript
 * const f = new DatetimeFormatter("yyyy/MM/dd HH:mm:ss SSS");
 *
 * // Convert Date object to string.
 * const str = f.format(new Date());
 * // -> "2023/10/10 12:21:19 002"
 *
 * // Convert string to Date object.
 * const date = f.parse("2023/10/10 12:21:19 002");
 * // -> return Date object
 * ```
 */
export class DatetimeFormatter {
  private _patterns: string[] = [];

  // @ts-ignore
  constructor(private pattern: string) {
    for (let i = 0; i < pattern.length; i++) {
      const ch = pattern.charAt(i);
      if (this._patterns.length == 0) {
        this._patterns[0] = ch;
      } else {
        const index = this._patterns.length - 1;
        if (this._patterns[index].charAt(0) == "'") {
          if (
            this._patterns[index].length == 1 ||
            this._patterns[index].charAt(this._patterns[index].length - 1) != "'"
          ) {
            this._patterns[index] += ch;
          } else {
            this._patterns[index + 1] = ch;
          }
        } else if (this._patterns[index].charAt(0) == ch) {
          this._patterns[index] += ch;
        } else {
          this._patterns[index + 1] = ch;
        }
      }
    }
  }

  format(date: Date): string {
    return this._patterns.map(ptn => this._formatWord(date, ptn)).join('');
  }

  private _formatWord(date: Date, pattern: string): string {
    // @ts-ignore
    const formatter = DatetimeFormatter._formatter[pattern.charAt(0)];
    if (formatter) {
      return formatter.apply(this, [date, pattern]);
    } else {
      return pattern;
    }
  }

  private static _formatter = {
    y(date: Date, pattern: string): string {
      // Year
      let year = String(date.getFullYear());
      if (pattern.length <= 2) {
        year = year.substring(2, 4);
      } else {
        year = DatetimeFormatter._zeroPadding(year, pattern.length);
      }
      return year;
    },
    M(date: Date, pattern: string): string {
      // Month in year
      return DatetimeFormatter._zeroPadding(String(date.getMonth() + 1), pattern.length);
    },
    d(date: Date, pattern: string): string {
      // Day in month
      return DatetimeFormatter._zeroPadding(String(date.getDate()), pattern.length);
    },
    H(date: Date, pattern: string): string {
      // Hour in day (0-23)
      return DatetimeFormatter._zeroPadding(String(date.getHours()), pattern.length);
    },
    m(date: Date, pattern: string): string {
      // Minute in hour
      return DatetimeFormatter._zeroPadding(String(date.getMinutes()), pattern.length);
    },
    s(date: Date, pattern: string): string {
      // Second in minute
      return DatetimeFormatter._zeroPadding(String(date.getSeconds()), pattern.length);
    },
    S(date: Date, pattern: string): string {
      // Millisecond
      return DatetimeFormatter._zeroPadding(String(date.getMilliseconds()), pattern.length);
    },
    "'": function (_: Date, pattern: string): string {
      // escape
      if (pattern == "''") {
        return "'";
      } else {
        return pattern.replace(/'/g, '');
      }
    },
  };

  private static _zeroPadding(str: string, length: number): string {
    if (str.length >= length) {
      return str;
    }

    return new Array(length - str.length + 1).join('0') + str;
  }

  parse(text: string): Date | null {
    if (!text || text === '') {
      return null;
    }

    const result = {
      year: 1970,
      month: 1,
      day: 1,
      hour: 0,
      min: 0,
      sec: 0,
      msec: 0,
    };

    let str: string | null = text;
    for (let i = 0; i < this._patterns.length; i++) {
      if (str == '') {
        return null;
      } // parse error!!
      str = this._parseWord(str, this._patterns[i], result);
      if (str === null) {
        return null;
      } // parse error!!
    }
    if (str != '') {
      return null;
    } // parse error!!

    return new Date(
      result.year,
      result.month - 1,
      result.day,
      result.hour,
      result.min,
      result.sec,
      result.msec,
    );
  }

  private _parseWord(text: string, pattern: string, result: any): string | null {
    // @ts-ignore
    const parser = DatetimeFormatter._parser[pattern.charAt(0)];
    if (parser) {
      return parser.apply(this, [text, pattern, result]);
    } else {
      if (text.indexOf(pattern) != 0) {
        return null;
      } else {
        return text.substring(pattern.length);
      }
    }
  }

  private static _parser = {
    y(text: string, pattern: string, result: any): string | null {
      // Year
      let year;
      if (pattern.length <= 2) {
        year = text.substring(0, 2);
        year = Number(year) < 70 ? '20' + year : '19' + year;
        text = text.substring(2);
      } else {
        const length = pattern.length == 3 ? 4 : pattern.length;
        year = text.substring(0, length);
        text = text.substring(length);
      }
      if (!DatetimeFormatter._isNumber(year)) {
        return null;
      } // error
      result.year = parseInt(year, 10);
      return text;
    },
    M(text: string, pattern: string, result: any): string | null {
      // Month in year
      let month;
      if (pattern.length == 1 && text.length > 1 && text.substring(0, 2).match(/1[0-2]/) != null) {
        month = text.substring(0, 2);
        text = text.substring(2);
      } else {
        month = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(month)) {
        return null;
      } // error
      result.month = parseInt(month, 10);
      return text;
    },
    d(text: string, pattern: string, result: any): string | null {
      // Day in month
      let day;
      if (
        pattern.length == 1 &&
        text.length > 1 &&
        text.substring(0, 2).match(/1[0-9]|2[0-9]|3[0-1]/) != null
      ) {
        day = text.substring(0, 2);
        text = text.substring(2);
      } else {
        day = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(day)) {
        return null;
      } // error
      result.day = parseInt(day, 10);
      return text;
    },
    H(text: string, pattern: string, result: any): string | null {
      // Hour in day (0-23)
      let hour;
      if (
        pattern.length == 1 &&
        text.length > 1 &&
        text.substring(0, 2).match(/1[0-9]|2[0-3]/) != null
      ) {
        hour = text.substring(0, 2);
        text = text.substring(2);
      } else {
        hour = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(hour)) {
        return null;
      } // error
      result.hour = parseInt(hour, 10);
      return text;
    },
    m(text: string, pattern: string, result: any): string | null {
      // Minute in hour
      let min;
      if (
        pattern.length == 1 &&
        text.length > 1 &&
        text.substring(0, 2).match(/[1-5][0-9]/) != null
      ) {
        min = text.substring(0, 2);
        text = text.substring(2);
      } else {
        min = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(min)) {
        return null;
      } // error
      result.min = parseInt(min, 10);
      return text;
    },
    s(text: string, pattern: string, result: any): string | null {
      // Second in minute
      let sec;
      if (
        pattern.length == 1 &&
        text.length > 1 &&
        text.substring(0, 2).match(/[1-5][0-9]/) != null
      ) {
        sec = text.substring(0, 2);
        text = text.substring(2);
      } else {
        sec = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(sec)) {
        return null;
      } // error
      result.sec = parseInt(sec, 10);
      return text;
    },
    S(text: string, pattern: string, result: any): string | null {
      // Millimsecond
      let msec;
      if (pattern.length == 1 || pattern.length == 2) {
        if (text.length > 2 && text.substring(0, 3).match(/[1-9][0-9][0-9]/) != null) {
          msec = text.substring(0, 3);
          text = text.substring(3);
        } else if (text.length > 1 && text.substring(0, 2).match(/[1-9][0-9]/) != null) {
          msec = text.substring(0, 2);
          text = text.substring(2);
        } else {
          msec = text.substring(0, pattern.length);
          text = text.substring(pattern.length);
        }
      } else {
        msec = text.substring(0, pattern.length);
        text = text.substring(pattern.length);
      }
      if (!DatetimeFormatter._isNumber(msec)) {
        return null;
      } // error
      result.msec = parseInt(msec, 10);
      return text;
    },
    "'": function (text: string, pattern: string): string | null {
      // escape
      if (pattern == "''") {
        pattern = "'";
      } else {
        pattern = pattern.replace(/'/g, '');
      }
      if (text.indexOf(pattern) != 0) {
        return null; // error
      } else {
        return text.substring(pattern.length);
      }
    },
  };

  private static _isNumber(str: string): boolean {
    return /^[0-9]*$/.test(str);
  }
}
