export function caesarEncrypt(text: string, key: string) {
  let k = parseInt(key)
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + k) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + k) % 26) + 97;
    }
    encryptedText += String.fromCharCode(charCode);
  }
  return encryptedText;
}


export function caesarDecrypt(text: string, key: string): string {
  const k = parseInt(key);
  if (isNaN(k)) throw new Error("Invalid key: must be a number");

  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const decrypted = ((code - 65 - (k % 26) + 26) % 26) + 65;
      decryptedText += String.fromCharCode(decrypted);
    } else if (code >= 97 && code <= 122) {
      const decrypted = ((code - 97 - (k % 26) + 26) % 26) + 97;
      decryptedText += String.fromCharCode(decrypted);
    } else {
      decryptedText += char;
    }
  }

  return decryptedText;
}

export function vigenereEncrypt(text: string, key: string): string {
  let encryptedText = "";
  key = key.toLowerCase().replace(/[^a-z]/g, ""); // keep only letters
  if (key.length === 0) return text; // no key, return original text

  let keyIndex = 0;
  for (const char of text) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase A–Z
      const shift = key.charCodeAt(keyIndex % key.length) - 97;
      const newChar = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      encryptedText += newChar;
      keyIndex++;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase a–z
      const shift = key.charCodeAt(keyIndex % key.length) - 97;
      const newChar = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      encryptedText += newChar;
      keyIndex++;
    } else {
      // Non-alphabetic characters unchanged
      encryptedText += char;
    }
  }

  return encryptedText;
}

export function vigenereDecrypt(text: string, key: string): string {
  let decryptedText = "";
  key = key.toLowerCase().replace(/[^a-z]/g, ""); // keep only letters
  if (key.length === 0) return text; // no key, return original text

  let keyIndex = 0;
  for (const char of text) {
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase A–Z
      const shift = key.charCodeAt(keyIndex % key.length) - 97;
      const newChar = String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      decryptedText += newChar;
      keyIndex++;
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase a–z
      const shift = key.charCodeAt(keyIndex % key.length) - 97;
      const newChar = String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      decryptedText += newChar;
      keyIndex++;
    } else {
      // Non-alphabetic characters unchanged
      decryptedText += char;
    }
  }

  return decryptedText;
}


function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function modInverse(a: number, m: number): number {
  a = mod(a, m);
  for (let x = 1; x < m; x++) {
    if (mod(a * x, m) === 1) return x;
  }
  throw new Error("No modular inverse exists");
}


export function hillEncrypt(text: string, keyMatrix: number[][]): string {
    text = text.toUpperCase().replace(/[^A-Z]/g, "");
    if (text.length % 2 !== 0) text += "X"; // pad if odd length

    let result = "";
    for (let i = 0; i < text.length; i += 2) {
        const pair = [text.charCodeAt(i) - 65, text.charCodeAt(i + 1) - 65];
        const enc1 = mod(keyMatrix[0][0] * pair[0] + keyMatrix[0][1] * pair[1], 26);
        const enc2 = mod(keyMatrix[1][0] * pair[0] + keyMatrix[1][1] * pair[1], 26);
        result += String.fromCharCode(enc1 + 65) + String.fromCharCode(enc2 + 65);
    }
    return result;
}


export function hillDecrypt(cipher: string, keyMatrix: number[][]): string {
    cipher = cipher.toUpperCase().replace(/[^A-Z]/g, "");
    if (cipher.length % 2 !== 0) cipher += "X";

    // Compute determinant and modular inverse
    const det = mod(keyMatrix[0][0] * keyMatrix[1][1] - keyMatrix[0][1] * keyMatrix[1][0], 26);
    const detInv = modInverse(det, 26);

    // Compute inverse matrix mod 26
    const invMatrix = [
        [mod(detInv * keyMatrix[1][1], 26), mod(-detInv * keyMatrix[0][1], 26)],
        [mod(-detInv * keyMatrix[1][0], 26), mod(detInv * keyMatrix[0][0], 26)]
    ];

    let result = "";
    for (let i = 0; i < cipher.length; i += 2) {
        const pair = [cipher.charCodeAt(i) - 65, cipher.charCodeAt(i + 1) - 65];
        const dec1 = mod(invMatrix[0][0] * pair[0] + invMatrix[0][1] * pair[1], 26);
        const dec2 = mod(invMatrix[1][0] * pair[0] + invMatrix[1][1] * pair[1], 26);
        result += String.fromCharCode(dec1 + 65) + String.fromCharCode(dec2 + 65);
    }
    return result;
}
