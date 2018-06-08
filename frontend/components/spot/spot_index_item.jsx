import React from 'react';
import { Link } from 'react-router-dom';

const makeStar = rating => '⭑⭑⭑⭑⭑'.slice(0, Math.floor(rating));

const SpotIndexItem = ({ spot }) => {
  let { id, name, imageUrl, location, landscape, price, rating = 5 } = spot;
  let star = makeStar(rating);
  id = `/spots/${id}`;
  location = `${landscape} · ${location}`.toUpperCase();
  price = `$${price} per day · Free cancellation`;

  return (
    <li className='spot-index-item'>
      <Link to={id}><img src={imageUrl} /></Link>
      <div className='quick-info'>
        <p className='location'>{location}</p>
        <Link to={id}><h4>{name}</h4></Link>
        <p>{price}</p>
        <span className='star'>{star}</span> {rating}
      </div>
    </li>
  );
};

export default SpotIndexItem;
