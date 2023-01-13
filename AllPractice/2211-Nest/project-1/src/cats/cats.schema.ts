import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions } from 'mongoose';
import * as v from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Cat extends Document {
  @ApiProperty({
    example: 'rjsgmldnwn@gamil.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @v.IsEmail()
  @v.IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1234',
    description: 'password',
    required: true,
  })
  @Prop({
    required: true,
  })
  @v.IsString()
  @v.IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'geonhee',
    description: 'name',
    required: true,
  })
  @Prop({
    required: true,
  })
  @v.IsString()
  @v.IsNotEmpty()
  password: string;

  @Prop({
    default:
      'https://www.google.com/imgres?imgurl=https%3A%2F%2Fsrc.hidoc.co.kr%2Fimage%2Flib%2F2022%2F5%2F12%2F1652337370806_0.jpg&imgrefurl=https%3A%2F%2Fwww.hidoc.co.kr%2Fhealthstory%2Fnews%2FC0000697072&tbnid=mbiAcXSmangGFM&vet=12ahUKEwjoxpzL1sP8AhUDTPUHHdSKCmwQMygJegUIARD7AQ..i&docid=EkYePiPCjkig8M&w=530&h=338&q=%EA%B3%A0%EC%96%91%EC%9D%B4&ved=2ahUKEwjoxpzL1sP8AhUDTPUHHdSKCmwQMygJegUIARD7AQ',
  })
  @v.IsString()
  imgUrl: string;

  readonly readOnlyData: {
    id: string;
    email: string;
    name: string;
    imgUrl: string;
  };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
    imgUrl: this.imgUrl,
  };
});
