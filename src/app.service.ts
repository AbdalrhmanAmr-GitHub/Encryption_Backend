import { HttpException, Injectable } from '@nestjs/common';
import { AlgorithmEnum } from './Algorithms/algorithm-enum';
import { ceasarEncrypt } from './Algorithms/algorithms';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getEncryptedText(text: string, algorithm: AlgorithmEnum, key?: string) {

    if (algorithm == AlgorithmEnum.CEASAR) {

      if (!key) throw new HttpException('Key is required', 400);

      return ceasarEncrypt(text, key);
    }
  }
}
