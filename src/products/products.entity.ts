import { IsOptional } from 'class-validator';
import { ReviewsEntity } from 'src/reviews/reviews.entity';
import { UserEntity } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: '255' })
  name: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'text', nullable: true })
  @IsOptional()
  description?: string;

  @OneToMany(() => ReviewsEntity, (reviews) => reviews.id, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  reviews: ReviewsEntity[];

  @ManyToOne(() => UserEntity, (user) => user.id)
  user: UserEntity;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
