import { StarbucksResolver } from './starbucks.resolver';
import { Module } from '@nestjs/common';
import { StarbucksService } from './starbucks.service';

@Module({
  providers: [StarbucksResolver, StarbucksService],
})
export class StarbucksModule {}
