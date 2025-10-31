import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgorithmsController } from './algorithms/algorithms.controller';
import { AlgorithmsService } from './algorithms/algorithms.service';
import { DeepseekModule } from './deepseek/deepseek.module';

@Module({
  imports: [DeepseekModule],
  controllers: [AppController, AlgorithmsController],
  providers: [AppService, AlgorithmsService],
})
export class AppModule { }
