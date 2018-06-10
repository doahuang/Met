import React from 'react';
import { Link } from 'react-router-dom';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, Math.floor(rating));

const SpotIndexItem = ({ spot }) => {
  let url = `/spots/${spot.id}`;
  let location = `${spot.landscape} · ${spot.location}`.toUpperCase();
  let price = `$${spot.price} per day · Free cancellation`;
  let rating = 5;
  let star = drawStar(rating);

  return (
    <div className='spot-index-item'>
      <li>
        <Link to={url}><img src={spot.imageUrl} /></Link>
        <div className='quick-info'>
          <p className='location'>{location}</p>
          <Link to={url}><h4>{spot.name}</h4></Link>
          <p>{price}</p>
          <span className='star'>{star}</span> 123
        </div>
      </li>
    </div>
  );
};

export default SpotIndexItem;
