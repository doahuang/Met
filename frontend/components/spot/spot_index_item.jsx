import React from 'react';

const SpotIndexItem = ({ spot }) => {
  let { name, imageUrl, latitude, longitude, location,
        landscape, size, price, description, ownerId } = spot;
  return (
    <div>
      <li className='spot-index-item'>
        <img src={imageUrl} /><br />
        <h4>{landscape} · capacity {size}</h4>
        <h3>{name}</h3>
        <p>${price} per night · ratings here</p>
        <p>{description}</p>
      </li>
    </div>
  );
};

export default SpotIndexItem;
