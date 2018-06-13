import React from 'react';
import { Link } from 'react-router-dom';

import StarRating from '../star_rating';

const BookingIndexItem = ({ booking, reviews, deleteBooking }) => {
  let url = `/spots/${booking.spotId}`;
  let { spot, guests } = booking;
  let guestsSum = guests > 1 ? `${guests} guests` : `${guests} guest`;

  let review = reviews.filter(el => el.spotId === spot.id);
  let rating = 0;
  review.forEach(el => rating += el.rating);
  rating = rating / review.length || 0;

  return (
    <li className='booking-index-item'>
      <div className='spot-img'>
        <Link to={url}><img src={spot.image_url} /></Link>
      </div>
      <div className='booking-info'>
        <h1><Link className='spot-name' to={url}>{spot.name}</Link></h1>
        <p>{booking.beginDate} ~ {booking.endDate}</p>
        <p>{guestsSum}</p>
        <p className='spot-loc'>{spot.location}</p>

        <StarRating rating={rating} />

        <div><Link to={url}>Read Your Review</Link></div>
        <div>
          <Link to={'/bookings'}
            onClick={() => deleteBooking(booking.id)}>
            Cancel Booking
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BookingIndexItem;
