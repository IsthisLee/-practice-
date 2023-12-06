import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import { Starbucks } from './apis/starbucks/entities/starbucks.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/gtaphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE, // 연결할 데이터 베이스명
      entities: [Starbucks], // 데이터 베이스와 연결할 entity
      synchronize: true, // entities에 정의된 스키마를 DB에 동기화
      logging: true,
    }),
    StarbucksModule,
  ],
  providers: [AppService],
})
export class AppModule {}
