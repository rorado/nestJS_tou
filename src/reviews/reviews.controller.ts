import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('/reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * @returns all reviews
   */
  @Get('')
  public getAllReviews() {
    return this.reviewsService.getAllReviews();
  }
}
