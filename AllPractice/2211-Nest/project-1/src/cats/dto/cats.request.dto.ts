import * as v from 'class-validator';

export class CatRequestDto {
  @v.IsEmail()
  @v.IsNotEmpty()
  email: string;

  @v.IsString()
  @v.IsNotEmpty()
  password: string;

  @v.IsString()
  @v.IsNotEmpty()
  name: string;
}
