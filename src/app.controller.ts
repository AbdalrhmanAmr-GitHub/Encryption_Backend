import { Body, Controller, Get, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AlgorithmEnum } from './algorithms/algorithm-enum';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


}

