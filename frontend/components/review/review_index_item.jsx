import React from 'react';

const ReviewIndexItem = ({ review, deleteReview }) => {
  let { rating, body, reviewerId } = review;

  return (
    <li className='review-index-item'>
      <span className='reviewer'>Guest #{reviewerId}</span>
      <p>{body}</p>
    </li>
  );
}

export default ReviewIndexItem;
