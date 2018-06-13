import React from 'react';
import BookingIndexItem from './booking_index_item';

export default class BookingIndex extends React.Component {
  componentDidMount() {
    let { fetchSpots, fetchReviews, fetchBookings } = this.props;

    fetchSpots();
    fetchReviews();
    fetchBookings();
  }

  render() {
    let { bookings, reviews, spots, deleteBooking } = this.props;
    bookings = bookings.map((booking, i) => {

      let spot = spots[booking.spotId];
      if (!spot) {
        return null;
      }

      let spotReviews = reviews.filter(el => el.spotId === booking.spotId)
      return <BookingIndexItem key={i}
              booking={booking} reviews={spotReviews} spot={spot}
              deleteBooking={deleteBooking} />;
    });

    return (
      <div className='booking-index-container'>
        <div className='promo'>
          <div className='ad'>
            <h2>Choose your next adventure</h2>
            <p>Give your friends $40 to try Met and you will also get $20 in travel credit when they take their first trip.</p>
            <button>Invite Friends</button>
          </div>
          <div className='gift'></div>
        </div>
        <ul className='booking-index-list'>{ bookings }</ul>
      </div>
    );
  }
}
