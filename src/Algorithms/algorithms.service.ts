import { HttpException, Injectable } from '@nestjs/common';
import { caesarDecrypt, caesarEncrypt, vigenereDecrypt, vigenereEncrypt } from './algorithms';
@Injectable()
export class AlgorithmsService {


    async getCaesarEncryptedText(text: string, key: string) {
        if (!key) throw new HttpException('Key is required', 400);
        return caesarEncrypt(text, key);
    }

    async getCaesarDecryptedText(text: string, key: string) {
        if (!key) throw new HttpException('Key is required', 400);
        return caesarDecrypt(text, key);
    }

    async getVigenereEncryptedText(text: string, key: string) {
        return vigenereEncrypt(text, key);
    }

    async getVigenereDecryptedText(text: string, key: string) {
        return vigenereDecrypt(key, text)
    }

    async getHillCipherEncryptedText(text: string, key: string) {
        return vigenereEncrypt(text, key);
    }

    async getHillCipherDecryptedText(text: string, key: string) {
        return vigenereDecrypt(key, text)
    }
}