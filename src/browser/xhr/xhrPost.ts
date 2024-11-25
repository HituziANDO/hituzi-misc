import { BaseError } from '../../type/BaseError';

/**
 * The type of options for `xhrPost` function.
 */
export type XHRPostOptions = {
  responseType: 'text' | 'json';
  headers?: { [key: string]: string };
};

/**
 * The error that occurs when the status code is not 200.
 */
export class XHRPostError extends BaseError {
  constructor(readonly statusCode: number, message: string) {
    super(message);
  }
}

/**
 * Makes a POST request to the given URL with JSON data and returns a promise that resolves with the response.
 * If the status code is not 200, returns a promise that rejects with `XHRPostError`.
 *
 * @param url A URL.
 * @param data Data to be sent in JSON format.
 * @param options Options for the request.
 */
export function xhrPost(
  url: string,
  data: any,
  options: XHRPostOptions = { responseType: 'json' },
): Promise<string> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    if (options.headers) {
      for (const key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if ([200].indexOf(xhr.status) !== -1) {
          if (options.responseType === 'json') {
            resolve(xhr.response);
          } else {
            resolve(xhr.responseText);
          }
        } else {
          const error = new XHRPostError(xhr.status, xhr.statusText);
          reject(error);
        }
      }
    };

    xhr.responseType = options.responseType;

    xhr.send(JSON.stringify(data));
  });
}
