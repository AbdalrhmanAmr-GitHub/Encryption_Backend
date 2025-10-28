import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AlgorithmEnum } from './algorithm-enum';
import { AlgorithmsService } from './algorithms.service';

@Controller('algorithms')
export class AlgorithmsController {

  constructor(private readonly algorithmsService: AlgorithmsService) { }

  @Post('/caesarEncrypt')
  async caesarEncrypt(
    @Body() body: { text: string; key?: string }
  ) {
    const { text, key } = body;
    if (!text) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getCaesarEncryptedText(text, key) }
  }

  @Post('/caesarDecrypt')
  async caesarDecrypt(
    @Body() body: { text: string; key?: string }
  ) {
    const { text, key } = body;
    if (!text) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getCaesarDecryptedText(text, key) }
  }

}
