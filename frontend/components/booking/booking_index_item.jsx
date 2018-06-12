import React from 'react';
import { Link } from 'react-router-dom';

const BookingIndexItem = ({ booking, spot }) => {

  return (
    <li className='booking-index-item'>
      <p>Start Date: {booking.startDate}</p>
      <p>End Date: {booking.endDate}</p>
      <p>Guests: {booking.guests}</p>
      <Link to={`/spots/${booking.spotId}`}>click here</Link>
    </li>
  );
};

export default BookingIndexItem;
