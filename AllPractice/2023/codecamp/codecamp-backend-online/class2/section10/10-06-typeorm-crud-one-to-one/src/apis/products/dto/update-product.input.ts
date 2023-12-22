import { InputType, OmitType, PartialType, PickType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {}

// PickType(CreateProductInput, ['name', 'price']); => 뽑기
// OmitType(CreateProductInput, ['description']); => 제거
// PartialType(CreateProductInput); => 전부 optional
