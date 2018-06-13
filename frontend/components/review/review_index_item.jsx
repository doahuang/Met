import React from 'react';
import { Link } from 'react-router-dom';

const ReviewIndexItem = ({ currentUser, spotId, review, deleteReview }) => {
  const toggleDelete = () => {
    if (currentUser && currentUser.id == review.reviewerId) {
      return (
        <Link to={`/spots/${spotId}`} onClick={() => deleteReview(review.id)}>
          remove
        </Link>
      );
    }
  }

  return (
    <li className='review-index-item'>
      <div>
        <span className='reviewer'>Guest #{review.reviewerId}</span>
        { toggleDelete() }
      </div>
      <p>{review.body ? review.body : 'No comments.'}</p>
    </li>
  );
}

export default ReviewIndexItem;
