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

  
}

