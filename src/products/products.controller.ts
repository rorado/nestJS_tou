import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';

type ProductType = {
  id: number;
  name: string;
  price: number;
};
@Controller('/api/products')
export class ProductsController {
  private products: ProductType[] = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];

  // post ('~/api/products')
  @Post()
  public createProduct(@Body() product: CreateProductDto) {
    if (!product.name || !product.price) {
      throw new NotFoundException('Name and price are required');
    }
    const newProduct: ProductType = {
      id: this.products.length + 1,
      name: product.name,
      price: product.price,
    };
    this.products.push(newProduct);
    return { message: 'Product created successfully', product: newProduct };
  }

  // get ('~/api/products')
  @Get()
  public getAllProducts() {
    return this.products;
  }

  // get ('~/api/products/:id')
  @Get('/:id')
  public getProductById(@Param('id') id: string) {
    const product = this.products.find((p) => p.id === parseInt(id));
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // put ('~/api/products/:id')
  @Put('/:id')
  public updateProduct(
    @Param('id') id: string,
    @Body() product: CreateProductDto,
  ) {
    const existingProduct = this.products.find((p) => p.id === parseInt(id));
    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }
    existingProduct.name = product.name;
    existingProduct.price = product.price;
    return {
      message: 'Product updated successfully',
      product: existingProduct,
    };
  }

  // delete ('~/api/products/:id')
  @Delete('/:id')
  public deleteProduct(@Param('id') id: string) {
    const productIndex = this.products.findIndex((p) => p.id === parseInt(id));
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    const deletedProduct = this.products.splice(productIndex, 1);
    return {
      message: 'Product deleted successfully',
      product: deletedProduct[0],
    };
  }
}
