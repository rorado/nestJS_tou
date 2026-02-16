import {
  Body,
  Controller,
  forwardRef,
  Get,
  Inject,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { ProductsService } from 'src/products/products.service';

@Controller('/api/users')
export class UsersController {
  constructor(
    @Inject(forwardRef(() => ProductsService))
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService,
  ) {}

  // get (~api/users)
  @Get()
  public getAllUsers() {
    console.log(this.productsService.getAllProducts());
    return this.usersService.getAllUsers();
  }
  @Post() public createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }
}
