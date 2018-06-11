import React from 'react';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, rating);

const StarRating = ({ reviews }) => {
  let reviewNum = reviews.length;
  let avgRating = 0;

  reviews.forEach(review => avgRating += parseInt(review.rating));
  avgRating = Math.floor(avgRating / reviewNum) || 0;

  return (
    <span className='blue star'>
      <span>{drawStar(avgRating)}</span>
      <span className='lightgrey'>{drawStar(5 - avgRating)}</span>
    </span>
  );
}

export default StarRating;
