import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  price: number;
}
