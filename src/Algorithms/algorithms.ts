export function ceasarEncrypt(text: string, key: string) {
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