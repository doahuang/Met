import React from 'react';
import { Link } from 'react-router-dom';

import StarRating from '../star_rating';

const SpotIndexItem = ({ spot, reviewCount, avgRating }) => {
  let url = `/spots/${spot.id}`;
  let location = `${spot.landscape} · ${spot.location}`.toUpperCase();
  let price = `$${spot.price} per day · Free cancellation`;

  return (
    <div className='spot-index-item'>
      <li>
        <Link to={url}><img src={spot.imageUrl} /></Link>
        <div className='quick-info'>
          <p className='location'>{location}</p>
          <Link to={url}><h4>{spot.name}</h4></Link>
          <p>{price}</p>
          <StarRating rating={avgRating} /> { reviewCount }
        </div>
      </li>
    </div>
  );
};

export default SpotIndexItem;
