import { HttpException, Injectable } from '@nestjs/common';
import { AlgorithmEnum } from './algorithm-enum';
import { caesarDecrypt, caesarEncrypt } from './algorithms';

@Injectable()
export class AlgorithmsService {


    async getCaesarEncryptedText(text: string, key?: string) {
        if (!key) throw new HttpException('Key is required', 400);
        return caesarEncrypt(text, key);
    }

    async getCaesarDecryptedText(text: string, key?: string) {
        if (!key) throw new HttpException('Key is required', 400);
        return caesarDecrypt(text, key);
    }
}