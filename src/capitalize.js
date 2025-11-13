/**
 * Takes a string and returns it with the first character capitalized
 * @param {string} str
 * @returns {string} capitalized string
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
