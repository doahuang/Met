import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../shared/star_rating';

const drawDate = date => new Date(date).toDateString().slice(4);

const BookingIndexItem = ({ spot, booking, reviews, deleteBooking }) => {
  let url = `/spots/${booking.spotId}`;
  let guests = booking.guests;
  guests = guests > 1 ? `${guests} guests` : `${guests} guest`;
  let startDate = drawDate(booking.startDate);
  let endDate = drawDate(booking.endDate);
  if (startDate.slice(-4) === endDate.slice(-4)) {
    startDate = startDate.slice(0, -4);
  }

  let review = reviews.filter(el => el.spotId === booking.spotId);
  let rating = 0;
  review.forEach(el => rating += el.rating);
  rating = rating / review.length || 0;


  return (
    <li className='booking-index-item'>
      <div className='spot-img'>
        <Link to={url}><img src={spot.imageUrl} /></Link>
      </div>
      <div className='booking-info'>
        <h1><Link className='spot-name' to={url}>{spot.name}</Link></h1>
        <p>{startDate} - {endDate}</p>
        <p>{guests}</p>
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
