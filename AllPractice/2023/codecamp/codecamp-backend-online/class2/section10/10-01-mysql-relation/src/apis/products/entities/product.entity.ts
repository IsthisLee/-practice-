import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSalesLocation } from 'src/apis/productsSalesLocations/entities/productSalesLocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // default varchar(255)

  @Column()
  desciption: string;

  @Column()
  price: number;

  @Column({ default: false })
  isSoldout: boolean; // default tinyint(1)

  @JoinColumn() // Product 테이블이 중심이다.(외래키가 Product 테이블에 생성됨) -> 1:1 관계에서만 사용
  @OneToOne(() => ProductSalesLocation) // ProductSalesLocation 테이블과 1:1 관계
  productSalesLocation: ProductSalesLocation;

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable() // Product와 ProductTag 사이 중간 테이블이 자동 생성됨.
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
