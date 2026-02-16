import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [forwardRef(() => ProductsModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
