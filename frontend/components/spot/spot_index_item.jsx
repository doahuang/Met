import React from 'react';
import { Link } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {
  let { id, name, imageUrl, location, landscape, price, rating = 5 } = spot;
  let makeStar = () => '⭑⭑⭑⭑⭑'.slice(0, Math.floor(rating));
  
  return (
    <div>
      <li className='spot-index-item'>
        <Link to={`/spots/${id}`}><img src={imageUrl} /></Link>
        <div className='quick-info'>
          <p className='loc'>{landscape.toUpperCase()} · {location.toUpperCase()}</p>
          <Link to={`/spots/${id}`}><h4>{name}</h4></Link>
          <p className='price'>${price} per night · Free cancellation</p>
          <span>{makeStar(rating)}</span> <span className='rating'>{rating}</span>
        </div>
      </li>
    </div>
  );
};

export default SpotIndexItem;
