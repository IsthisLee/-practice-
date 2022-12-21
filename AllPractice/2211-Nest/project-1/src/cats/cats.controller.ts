import { CatsService } from './cats.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
// @UseInterceptors(SuccessInterceptor) // interceptor DI
// @UseFilters(HttpExceptionFilter) // exception filter DI
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @Post('login')
  logIn() {
    return 'login';
  }

  @Post('logout')
  logOut() {
    return 'logout';
  }

  @Post('upload/cats')
  uploadCatImg() {
    return 'uploadImg';
  }
}
