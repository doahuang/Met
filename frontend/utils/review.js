export const fetchReviews = () => $.ajax({
  method: 'GET', url: 'api/reviews'
});

export const createReview = review => $.ajax({
  method: 'POST', url: `api/spots/${review.spotId}/reviews`,
  data: { review: payload(review) }
});

export const deleteReview = id => $.ajax({
  method: 'DELETE', url: `api/reviews/${id}`
});

const payload = review => ({
  rating: review.rating,
  body: review.body,
  spot_id: review.spotId,
  reviewer_id: review.reviewerId
});
