import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgorithmsController } from './Algorithms/algorithms.controller';
import { AlgorithmsService } from './Algorithms/algorithms.service';

@Module({
  imports: [],
  controllers: [AppController, AlgorithmsController],
  providers: [AppService ,AlgorithmsService],
})
export class AppModule {}
