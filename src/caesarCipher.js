/**
 * Takes a string and a shift factor and returns it with each character “shifted”.
 * @param {string} str - plain text
 * @param {number} key - number by which we shift the alphabet
 * @returns {string} cipher text, shifted 'key' times
 */
export function caesarCipher(str, key) {
  const plainTextAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipherTextAlphabet = structuredClone(plainTextAlphabet);

  for (let i = 0; i < key; i++) {
    cipherTextAlphabet.push(cipherTextAlphabet.shift());
  }

  let index;
  let cipherChar;
  let cipherStr = "";
  str.split("").forEach((char) => {
    if (!isAlphanumeric(char)) {
      cipherChar = char;
    } else if (isUpperCase(char)) {
      index = plainTextAlphabet.indexOf(char.toLowerCase());
      cipherChar = cipherTextAlphabet[index].toUpperCase();
    } else {
      index = plainTextAlphabet.indexOf(char);
      cipherChar = cipherTextAlphabet[index];
    }

    cipherStr += cipherChar;
  });

  return cipherStr;
}

/**
 * Checks if a character is alphanumeric
 * @param {string} char - single character in a string
 * @returns {boolean} true if char is alphanumeric, false otherwise
 */
function isAlphanumeric(char) {
  return "abcdefghikjlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .includes(char);
}

/**
 * Checks if the given character is uppercase
 * @param {string} char - single character in a string
 * @returns {boolean} true if char is an uppercase character, false otherwise
 */
function isUpperCase(char) {
  return char === char.toUpperCase() && char !== char.toLowerCase();
}
