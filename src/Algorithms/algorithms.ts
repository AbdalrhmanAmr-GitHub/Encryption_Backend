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
