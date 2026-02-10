import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';

type ProductType = {
  id: number;
  name: string;
  price: number;
};
export class ProductsService {
  private products: ProductType[] = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
  ];

  /**
   * @description get all products.
   *
   *  */
  public getAllProducts() {
    return this.products;
  }

  /**
   * @description get product by id.
   */
  public getProductById(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  /**
   * @description create a new product.
   *
   *  */
  public createProduct({ name, price }: CreateProductDto) {
    if (!name || !price) {
      throw new NotFoundException('Name and price are required');
    }
    const newProduct: ProductType = {
      id: this.products.length + 1,
      name,
      price,
    };
    this.products.push(newProduct);
    return { message: 'Product created successfully', product: newProduct };
  }

  /**
   * @description update product by id.
   */
  public updateProductById(id: number, product: UpdateProductDto) {
    if (!product.name && product.price === undefined) {
      throw new BadRequestException('No data provided to update');
    }
    const existingProduct = this.products.find((p) => p.id === id);

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    if (!product.name && product.price === undefined) {
      throw new BadRequestException('No data provided to update');
    }

    if (product.name !== undefined) {
      existingProduct.name = product.name;
    }

    if (product.price !== undefined) {
      existingProduct.price = product.price;
    }

    return {
      message: 'Product updated successfully',
      product: existingProduct,
    };
  }

  /**
   * @description delete product by id.
   */
  public deleteProductById(id: number) {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new NotFoundException('Product not found');
    }
    const deletedProduct = this.products.splice(productIndex, 1);
    return {
      message: 'Product deleted successfully',
      product: deletedProduct,
    };
  }
}
