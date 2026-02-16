import {
  Body,
  Controller,
  Delete,
  forwardRef,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';
import { UsersService } from 'src/users/user.service';

@Controller('/api/products')
export class ProductsController {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userServices: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  // post ('~/api/products')
  @Post()
  public createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  // get ('~/api/products')
  @Get()
  public getAllProducts() {
    console.log(this.userServices.getAllUsers());
    return this.productsService.getAllProducts();
  }

  // get ('~/api/products/:id')
  @Get('/:id')
  public getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  // put ('~/api/products/:id')
  @Put('/:id')
  public updateProduct(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProductById(id, product);
  }

  // delete ('~/api/products/:id')
  @Delete('/:id')
  public deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProductById(id);
  }
}
