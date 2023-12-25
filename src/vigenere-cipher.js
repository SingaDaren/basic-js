const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(noReverse = true) {
    this.noReverse = noReverse;
  }

  encrypt(plaintext, key) {
    if (plaintext === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    plaintext = plaintext.toUpperCase();
    key = key.toUpperCase();

    let generatedCiphertext = "";
    let keyChar = 0;

    if (plaintext.length > key.length) key = key.padEnd(plaintext.length, key);

    for (let i = 0; i < plaintext.length; i += 1) {
      if (plaintext[i].match(/[A-Z]/)) {
        let ciphertextChar =
          ((plaintext[i].charCodeAt(0) + key[keyChar].charCodeAt(0)) % 26) + 65;
        generatedCiphertext += String.fromCharCode(ciphertextChar);
        keyChar += 1;
      } else generatedCiphertext += plaintext[i];
    }

    return this.noReverse
      ? generatedCiphertext
      : generatedCiphertext.split("").reverse().join("");
  }

  decrypt(ciphertext, key) {
    if (ciphertext === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    ciphertext = ciphertext.toUpperCase();
    key = key.toUpperCase();

    let generatedPlaintext = "";
    let keyChar = 0;

    if (ciphertext.length > key.length)
      key = key.padEnd(ciphertext.length, key);

    for (let i = 0; i < ciphertext.length; i += 1) {
      if (ciphertext[i].match(/[A-Z]/)) {
        let plaintextChar =
          ((ciphertext[i].charCodeAt(0) - key[keyChar].charCodeAt(0) + 26) %
            26) +
          65;
        generatedPlaintext += String.fromCharCode(plaintextChar);
        keyChar += 1;
      } else generatedPlaintext += ciphertext[i];
    }

    return this.noReverse
      ? generatedPlaintext
      : generatedPlaintext.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
