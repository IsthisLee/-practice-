import { ProductSalesLocationInput } from './../../productsSalesLocations/dto/product-sales-location.input';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  @Min(0, { message: '가격은 0원 이상이어야 합니다.' })
  price: number;

  @Field(() => ProductSalesLocationInput)
  productSalesLocation: ProductSalesLocationInput;
}
