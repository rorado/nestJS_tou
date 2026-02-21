import { ProductEntity } from 'src/products/products.entity';
import { ReviewsEntity } from 'src/reviews/reviews.entity';
import { UserType } from 'src/utils/enums';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserType, default: UserType.NORMAL_USER })
  userType: UserType;

  @Column({ default: false })
  isAccountVerified: boolean;

  @OneToMany(() => ProductEntity, (product) => product.id, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  product: ProductEntity[];

  @ManyToOne(() => ReviewsEntity, (review) => review.id, {
    onDelete: 'CASCADE',
  })
  reviews: ReviewsEntity[];

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
