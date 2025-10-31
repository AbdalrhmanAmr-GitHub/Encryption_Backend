import { Body, Controller, Post } from '@nestjs/common';
import { DeepseekService } from './deepseek.service';

@Controller('deepseek')
export class DeepseekController {
  constructor(private readonly deepseekService: DeepseekService) { }

  @Post('chat')
  async getChatResponse(@Body() body: { prompt: string }) {
    const { prompt } = body;
    return this.deepseekService.getChatResponse(prompt);
  }
}
