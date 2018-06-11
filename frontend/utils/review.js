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

//to change
// POST /api/spots/:spot_id/reviews - post a review

const payload = review => ({
  rating: review.rating,
  body: review.body,
  spot_id: review.spotId
});
