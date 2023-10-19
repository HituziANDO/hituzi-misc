/**
 * Converts given message to the message digest using specified algorithm.
 *
 * @param {string} message A message to be converted to the message digest.
 * @param {string} algorithm A hash algorithm to be used. The default is SHA-1.
 * @return {Promise} A promise that wraps a message digest as hex string.
 */
export async function messageDigest(
  message: string,
  algorithm: 'SHA-1' | 'SHA-256' | 'SHA-384' | 'SHA-512' = 'SHA-1',
): Promise<string> {
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    // Node.js
    let algo = 'sha1';
    if (algorithm === 'SHA-256') {
      algo = 'sha256';
    } else if (algorithm === 'SHA-384') {
      algo = 'sha384';
    } else if (algorithm === 'SHA-512') {
      algo = 'sha512';
    }
    return require('crypto').createHash(algo).update(message).digest('hex');
  } else {
    // Browser
    // encode as (utf-8) Uint8Array
    const msgUint8 = new TextEncoder().encode(message);
    // hash the message
    const hashBuffer = await window.crypto.subtle.digest(algorithm, msgUint8);
    // convert buffer to byte array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }
}
