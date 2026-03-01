import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // post ('~/api/products')
  @Post()
  public createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  // get ('~/api/products')
  @Get()
  public getAllProducts() {
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
