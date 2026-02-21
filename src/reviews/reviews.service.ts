import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReviewsEntity } from './reviews.entity';
import { Repository } from 'typeorm';
import { isUUID } from 'class-validator';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(ReviewsEntity)
    private reviewsRepository: Repository<ReviewsEntity>,
  ) {}

  public async getAullReviews() {
    return await this.reviewsRepository.find();
  }

  public async getreviewsByID(id: string) {
    if (!isUUID(id)) throw new BadRequestException('Invalid Id');
    const review = await this.reviewsRepository.findOneBy({ id });
    if (!review) throw new NotFoundException('review not found');
    return review;
  }

  //   public async createReview(review: createReviewDto) {

  //   }
}
