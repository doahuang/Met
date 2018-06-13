import React from 'react';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, rating);

const StarRating = ({ rating }) => {
  rating = Math.floor(rating);

  return (
    <span className='blue star'>
      <span>{drawStar(rating)}</span>
      <span className='lightgrey'>{drawStar(5 - rating)}</span>
    </span>
  );
}

export default StarRating;
