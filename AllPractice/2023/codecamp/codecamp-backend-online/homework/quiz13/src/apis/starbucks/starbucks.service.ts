import { Injectable } from '@nestjs/common';
import { Starbucks } from './entities/starbucks.entity';
import { StarbucksServiceCreate } from './interfaces/starbucks-service.interface';

@Injectable()
export class StarbucksService {
  findAll(): Starbucks[] {
    const result: Starbucks[] = [
      {
        id: 1,
        menu: '아메리카노',
        price: 4100,
        kcal: 10,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 150,
      },
      {
        id: 2,
        menu: '카페라떼',
        price: 4600,
        kcal: 190,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 75,
      },
    ];

    return result;
  }

  create({ createStarbucksInput }: StarbucksServiceCreate): string {
    console.log({ createStarbucksInput });

    return '등록에 성공하였습니다.';
  }
}
