import { Controller, Get } from '@nestjs/common';

@Controller('/api/reviews')
export class ReviewsController {
  // get ('~/api/reviews')

  @Get('')
  public getAllReviews() {
    return [
      { id: 1, productId: 1, userId: 1, rating: 5, comment: 'Great product!' },
      {
        id: 2,
        productId: 1,
        userId: 2,
        rating: 4,
        comment: 'Good value for money.',
      },
      {
        id: 3,
        productId: 2,
        userId: 1,
        rating: 3,
        comment: 'Average quality.',
      },
    ];
  }
}
