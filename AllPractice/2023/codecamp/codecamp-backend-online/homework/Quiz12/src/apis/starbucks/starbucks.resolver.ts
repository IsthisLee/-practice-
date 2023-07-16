import { Get } from '@nestjs/common';
import { StarbucksService } from './starbucks.service';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class StarbucksResolver {
  constructor(
    private readonly starbucksService: StarbucksService, //
  ) {}

  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.starbucksService.getMenus();
  }
}
