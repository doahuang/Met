import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking, spot }) => {
  let url = `/spots/${booking.spotId}`;

  return (
    <li className='booking-index-item'>
      <div className='spot-img'>
        <Link to={url}><img src={spot.imageUrl} /></Link>
      </div>
      <div className='booking-info'>
        <h1><Link className='spot-name' to={url}>{spot.name}</Link></h1>
        <p>{booking.beginDate} - {booking.endDate} · {booking.guests} guests</p>
        <p className='spot-loc'>{spot.location}</p>
        <span>⭑⭑⭑⭑⭑</span>
        <div><Link to={url}><p>Read Your Review</p></Link></div>
        <div><p>View Receipt</p></div>
        <div><p>Send or request money</p></div>
      </div>
    </li>
  );
};

export default BookingIndexItem;
