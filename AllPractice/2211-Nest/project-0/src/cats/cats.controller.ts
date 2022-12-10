import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'get all cats';
  }

  @Get()
  getOneCat() {
    return 'get one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update partial cat';
  }

  @Delete(':id')
  deleteCate() {
    return 'delete cat';
  }
}
