import { HttpException, Injectable } from '@nestjs/common';
import { AlgorithmEnum } from './Algorithms/algorithm-enum';
import { caesarEncrypt } from './Algorithms/algorithms';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }


}
