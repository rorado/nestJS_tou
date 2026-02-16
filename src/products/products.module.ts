import { forwardRef, Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    forwardRef(() => UsersModule),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
