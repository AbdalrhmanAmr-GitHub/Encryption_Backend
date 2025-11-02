import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AlgorithmsService } from './algorithms.service';

@Controller('algorithms')
export class AlgorithmsController {

  constructor(private readonly algorithmsService: AlgorithmsService) { }

  @Post('/caesarEncrypt')
  async caesarEncrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getCaesarEncryptedText(text, key) }
  }

  @Post('/caesarDecrypt')
  async caesarDecrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getCaesarDecryptedText(text, key) }
  }

  @Post('/vigenereEncrypt')
  async vigenereEncrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getVigenereEncryptedText(text, key) }
  }

  @Post("vignereDecrypt")
  async vigenereDecrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getVigenereDecryptedText(text, key) }
  }

  @Post("hillCipherEncrypt")
  async hillCipherEncrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getHillCipherEncryptedText(text, key) }
  }

  @Post("hillCipherDecrypt")
  async hillCipherDecrypt(
    @Body() body: { text: string; key: string }
  ) {
    const { text, key } = body;
    if (!(text && key)) {
      throw new HttpException('Text is required', 400);
    }
    return { "data": await this.algorithmsService.getHillCipherDecryptedText(text, key) }
  }
}
