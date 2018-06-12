import React from 'react';
import BookingIndexItem from './booking_index_item';

export default class BookingIndex extends React.Component {
  componentDidMount() {
    if (this.props.bookings.length === 0) {
      this.props.fetchBookings();
    }
  }

  render() {
    let { bookings, spots } = this.props;

    if (!bookings) {
      return null;
    }

    bookings = bookings.map((booking, i) => (
      <BookingIndexItem key={i}
        booking={booking} spot={spots[booking.spotId]} />
    ));

    return (
      <div className='booking-index-container'>
        <h2>Bookings</h2>
        <ul className='booking-index-list'>{ bookings }</ul>
      </div>
    );
  }
}
