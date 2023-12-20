import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductServiceCreate,
  IProductServiceFindOne,
  IProductServiceUpdate,
} from './interfaces/product-service.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  create({ createProductInput }: IProductServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,

      // 하나 하나 직접 나열하는 방식
      // name: '마우스',
      // description: '로지텍 마우스',
      // price: 5000,
    });

    // result 안에는 무엇이 있을까?
    // result = {
    // id: 'qrqsfsd-sadfweraw',
    // name: '마우스',
    // description: '로지텍 마우스',
    // price: 5000,
    // }

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
}
