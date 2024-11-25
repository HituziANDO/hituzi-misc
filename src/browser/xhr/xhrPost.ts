import { BaseError } from '../../type/BaseError';

/**
 * The type of options for `xhrPost` function.
 */
export type XHRPostOptions = {
  /**
   * The URL to send the request.
   */
  url: string;
  /**
   * The data to be sent.
   */
  data?: any;
  /**
   * The response type.
   */
  responseType?: 'text' | 'json';
  /**
   * The headers.
   */
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
 * Makes a POST request to the given URL with data and returns a promise that resolves with the response.
 * If the status code is not 200, returns a promise that rejects with `XHRPostError`.
 *
 * @param options Options for the request.
 */
export function xhrPost(options: XHRPostOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    if (!options.url) {
      reject(new XHRPostError(-1, 'url is required.'));
      return;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', options.url);

    const headers = Object.assign({ 'Content-Type': 'application/json' }, options.headers || {});

    for (const key in headers) {
      xhr.setRequestHeader(key, headers[key]);
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

    xhr.responseType = options.responseType || 'json';

    if (options.data) {
      xhr.send(JSON.stringify(options.data));
    } else {
      xhr.send();
    }
  });
}
