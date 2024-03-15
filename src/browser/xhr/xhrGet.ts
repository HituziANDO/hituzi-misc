import { BaseError } from '../../type/BaseError.ts';

/**
 * The type of options for `xhrGet` function.
 */
export type XHRGetOptions = { responseType: 'text' | 'json' };

/**
 * The error that occurs when the status code is not 200.
 */
export class XHRGetError extends BaseError {
  constructor(readonly statusCode: number, message: string) {
    super(message);
  }
}

/**
 * Makes a GET request to the given URL and returns a promise that resolves with the response.
 * If the status code is not 200, returns a promise the rejects with `XHRGetError`.
 *
 * @param url A URL.
 * @param options Options for the request.
 */
export function xhrGet(
  url: string,
  options: XHRGetOptions = { responseType: 'json' },
): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ([200].indexOf(xhr.status) !== -1) {
          if (options.responseType === 'json') {
            resolve(xhr.response);
          } else {
            resolve(xhr.responseText);
          }
        } else {
          const error = new XHRGetError(xhr.status, xhr.statusText);
          reject(error);
        }
      }
    };

    xhr.responseType = options.responseType;

    xhr.send();
  });
}
