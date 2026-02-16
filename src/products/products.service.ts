import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './products.entity';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  public async getAllProducts() {
    return await this.productRepository.find();
  }

  public async getProductById(id: string) {
    if (!isUUID(id)) throw new BadRequestException('Invalid Id');
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  public async createProduct(dto: CreateProductDto) {
    if (!dto) throw new BadRequestException('Name and price are required');
    const newProduct = this.productRepository.create(dto);
    await this.productRepository.save(newProduct);
    return { message: 'Product created successfully', product: newProduct };
  }

  public async updateProductById(id: string, dto: UpdateProductDto) {
    if (!dto) throw new BadRequestException();
    const product = await this.getProductById(id);

    Object.assign(product, dto);

    const updatedProduct = await this.productRepository.save(product);
    return { message: 'Product updated successfully', updatedProduct };
  }

  public async deleteProductById(id: string) {
    if (!id) throw new BadRequestException();
    const product = await this.getProductById(id);
    await this.productRepository.remove(product);
    return { message: 'Product deleted successfully', product };
  }
}
