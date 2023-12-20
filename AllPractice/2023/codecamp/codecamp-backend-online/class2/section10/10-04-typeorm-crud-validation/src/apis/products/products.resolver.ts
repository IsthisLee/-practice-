import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './entities/product.entity';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService, //
  ) {}
  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ): Promise<Product> {
    return this.productsService.findOne({ productId });
  }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    // << 등록 후 브라우저에 결과 보내주는 2가지 방법 >>

    // 1. 등록된 내용이 담긴 객체를 그대로 브라우저에 돌려보내주기
    return this.productsService.create({ createProductInput });
    // nest는 return 시에 Promise 상태면 자동으로 처리 후 결과값을 반환해줌.
    // -> express에서는 직접 처리해줘야 함.

    // 2. 결과메시지만 간단히 보내주기
    // return '정상적으로 상품이 등록되었습니다.';

    // -> 회사마다, 기획별로 다름.
    // -> 보통 1번 방법 많이 사용. 등록 후 조회 요청 필요 없이 등록된 내용 바로 확인 가능.
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.update({
      productId,
      updateProductInput,
    });
  }
}
