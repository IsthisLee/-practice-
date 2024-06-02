import { InjectRepository } from '@nestjs/typeorm';
import { ProductSalesLocation } from './entities/productSalesLocation.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IProductsSalesLocationsServiceCreate } from './interfaces/productsSalesLocations-service.interface';

@Injectable()
export class ProductsSalesLocationsService {
  constructor(
    @InjectRepository(ProductSalesLocation)
    private readonly productSalesLocationsRepository: Repository<ProductSalesLocation>,
  ) {}

  create({ productSalesLocationInput }: IProductsSalesLocationsServiceCreate) {
    return this.productSalesLocationsRepository.save({
      ...productSalesLocationInput,
    });
  }
}
