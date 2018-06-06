import React from 'react';

const SpotIndexItem = ({ spot }) => {
  let { name, imageUrl, latitude, longitude, location,
        landscape, size, price, description, ownerId } = spot;
  return (
    <div className='spots-list'>
      <li>
        <img src={imageUrl} /><br />
        <h4>{landscape} · capacity: {size}</h4>
        <h3>{name}</h3>
        <p>${price} per night · {description}</p>
        <h5>***** rating</h5>
      </li>
    </div>
  );
};

export default SpotIndexItem;
