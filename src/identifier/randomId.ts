/**
 * Generate a random identifier of the specified length.
 *
 * @param length The length of the identifier. Default is 26.
 * @return A random string with lowercase.
 */
export function randomId(length = 26): string {
  // Creates ID with 0-9, a-z characters.
  const generate = () => Math.random().toString(36).slice(-8);
  const times = Math.ceil(length / 8);
  return Array.from({ length: times }, generate).join('').slice(0, length).toLowerCase();
}
