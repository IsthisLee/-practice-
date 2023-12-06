import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { Starbucks } from './entities/starbucks.entity';
import { CreateStarbucksInput } from './dtos/create-starbucks.input';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Starbucks], { nullable: true })
  fetchStarbucks(): Starbucks[] {
    return this.starbucksService.findAll();
  }

  @Mutation(() => String)
  createStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.starbucksService.create({ createStarbucksInput });
  }
}
