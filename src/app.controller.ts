import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AlgorithmEnum } from './Algorithms/algorithm-enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/encrypt')
  async encrypt(
    @Body() body: { text: string; algorithm: AlgorithmEnum; key?: string }
  ) {
    const { text, algorithm, key } = body;

    if (!text || !algorithm) {
      throw new HttpException('Text and algorithm are required', 400);
    }

    return this.appService.getEncryptedText(text, algorithm, key);
  }
}

