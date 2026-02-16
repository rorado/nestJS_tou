import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Length,
  IsOptional,
} from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;
}
