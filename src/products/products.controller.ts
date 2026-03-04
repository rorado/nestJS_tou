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

@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * post ('~/api/products')
   * @param product - the product to create
   * @returns the created product
   */
  @Post()
  public createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }

  /**
   * get ('~/api/products')
   * @returns all products
   */
  @Get()
  public getAllProducts() {
    return this.productsService.getAllProducts();
  }

  /**
   * get ('~/api/products/:id')
   * @param id - the id of the product to retrieve
   * @returns the product with the specified id
   */
  @Get('/:id')
  public getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  /**
   * put ('~/api/products/:id')
   * @param id - the id of the product to update
   * @param product - the updated product data
   * @returns the updated product
   */
  @Put('/:id')
  public updateProduct(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ) {
    return this.productsService.updateProductById(id, product);
  }

  /**
   * delete ('~/api/products/:id')
   * @param id - the id of the product to delete
   * @returns a message indicating the result of the deletion
   */
  @Delete('/:id')
  public deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProductById(id);
  }
}
