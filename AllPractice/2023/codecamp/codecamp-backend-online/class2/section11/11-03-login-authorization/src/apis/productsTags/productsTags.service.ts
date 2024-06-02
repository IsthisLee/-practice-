import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsTagsServiceBulkInsert,
  IProductsTagsServiceFindByNames,
  IProductsTagsServiceInsertTags,
} from './interfaces/products-tags-service.interface';

@Injectable()
export class ProductsTagsService {
  constructor(
    @InjectRepository(ProductTag)
    private readonly productsTagsRepository: Repository<ProductTag>,
  ) {}

  findByNames({ tagNames }: IProductsTagsServiceFindByNames) {
    return this.productsTagsRepository.find({
      where: { name: In(tagNames) },
    });
  }

  bulkInsert({ names }: IProductsTagsServiceBulkInsert) {
    return this.productsTagsRepository.insert([...names]); // bulk-insert는 save()로 불가능
  }

  async insertByProductTags({ productTags }: IProductsTagsServiceInsertTags) {
    // productTags가 ["#전자제품", "#영등포", "#컴퓨터"]와 같은 패턴이라고 가정.
    const tagNames = productTags.map((tag) => tag.replace('#', ''));
    const prevTags = await this.findByNames({ tagNames }); // [전자제품]

    const temp: { name: string }[] = [];
    tagNames.forEach((tagName) => {
      const isExist = prevTags.find((prevTag) => tagName === prevTag.name);
      if (!isExist) temp.push({ name: tagName });
    });

    const newTags = await this.bulkInsert({ names: temp });

    return [...prevTags, ...newTags.identifiers]; // [{id: "전자제품ID"}, {id: "컴퓨터ID"}, {id: "영등포ID"}]
  }
}
