import { ProductsSalesLocationsService } from './../productsSalesLocations/productsSalesLocations.service';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductServiceCreate,
  IProductServiceDelete,
  IProductServiceFindOne,
  IProductServiceUpdate,
} from './interfaces/product-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
    private readonly productsSalesLocationsService: ProductsSalesLocationsService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSalesLocation'],
      // withDeleted: true,
    });
  }

  findOne({ productId }: IProductServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSalesLocation'],
    });
  }

  async create({
    createProductInput,
  }: IProductServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록할 때 사용하는 방법
    // const result = this.productsRepository.save({
    //   ...createProductInput,

    //   // 하나 하나 직접 나열하는 방식
    //   // name: '마우스',
    //   // description: '로지텍 마우스',
    //   // price: 5000,
    // });

    // result 안에는 무엇이 있을까?
    // -> save 시 전송된 객체 요소들이 반환됨.

    // 2. 상품과 상품거래위치를 같이 등록하는 방법
    const { productSalesLocation, ...product } = createProductInput;

    const productSalesLocationResult =
      await this.productsSalesLocationsService.create({
        productSalesLocationInput: productSalesLocation,
      }); // 해당 서비스를 타고 등록하는 이유는??
    //  // 레파지토리에 직접 접근하면 검증 로직을 통일 시킬 수 없음!!

    const result = this.productsRepository.save({
      ...product,
      productSalesLocation: productSalesLocationResult,
    });

    return result;
  }

  async update({
    productId,
    updateProductInput,
  }: IProductServiceUpdate): Promise<Product> {
    // 기존 메서드를 재사용하여, 로직을 통일하자!!
    const product = await this.findOne({ productId });

    // 검증은 서비스에서 하자!!
    this.checkSoldout({ product });

    /**
     * this.productsRepository.create; // DB 접속과 관련 없음. 등록을 위한 빈 껍데기 객체 만들기 위함.
     * this.productsRepository.insert; // 수정된 객체를 반환하지 않음.
     * this.productsRepository.update; // 수정된 객체를 반환하지 않음.
     * this.productsRepository.save; // 객체를 반환함. (조회 발생)
     */

    // save 메서드 => 등록 or 수정
    const result = this.productsRepository.save({
      ...product, // 수정 후, 수정되지 않은 다른 필드값까지 모두 객체로 반환받기 위함.
      ...updateProductInput,
    });

    return result;
  }

  // 1. checkSoldout을 메서드로 만드는 이유
  //    => 수정, 삭제 시 등 같은 검증 로직 사용
  checkSoldout({ product }: IProductServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }
  }

  async delete({ productId }: IProductServiceDelete): Promise<boolean> {
    // 1. hard delete
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 2. soft delete(직접 구현) - isDeleted 컬럼 (history 관리)
    // this.productsRepository.update({ id: productId }, { isDeleted: true });

    // 3. soft delete(직접 구현) - deletedAt 컬럼 (history 관리)
    // this.productsRepository.update({ id: productId },{ deletedAt: new Date() });

    // 4. soft delete(TypeORM 제공) - softRemove
    this.productsRepository.softRemove({ id: productId });
    // 단점: id로만 삭제 가능
    // 장점: 여러 ID 한번에 삭제 가능 (ex. .softRemove([{ id: 1 }, { id: 2 }]))

    // 5. soft delete(TypeORM 제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId });
    // 단점: 여러 ID 한번에 삭제 불가능
    // 장점: 다른 컬럼으로도 삭제 가능
    return result.affected ? true : false;
  }
}
