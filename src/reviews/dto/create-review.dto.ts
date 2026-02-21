import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class createReviewDto {
  @IsString()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsOptional()
  comment: string;
}
