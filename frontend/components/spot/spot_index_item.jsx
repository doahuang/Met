import React from 'react';
import { Link } from 'react-router-dom';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, rating);

const SpotIndexItem = ({ spot, reviews }) => {
  let url = `/spots/${spot.id}`;
  let location = `${spot.landscape} · ${spot.location}`.toUpperCase();
  let price = `$${spot.price} per day · Free cancellation`;
  let reviewNum = reviews.length;
  let avgRating = 0;

  reviews.forEach(review => avgRating += parseInt(review.rating));
  avgRating = Math.ceil(avgRating / reviewNum) || 0;

  return (
    <div className='spot-index-item'>
      <li>
        <Link to={url}><img src={spot.imageUrl} /></Link>
        <div className='quick-info'>
          <p className='location'>{location}</p>
          <Link to={url}><h4>{spot.name}</h4></Link>
          <p>{price}</p>
          <span className='star'>{drawStar(avgRating)}</span>
          <span className='lightgrey'>{drawStar(5 - avgRating)}</span> {reviewNum}
        </div>
      </li>
    </div>
  );
};

export default SpotIndexItem;
