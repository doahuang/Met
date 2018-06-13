import { connect } from 'react-redux';

import BookingIndex from './booking_index';
import { fetchSpots } from '../../actions/spot';
import { fetchBookings, deleteBooking } from '../../actions/booking';
import { fetchReviews } from '../../actions/review';

const msp = ({ entities }) => ({
  spots: Object.values(entities.spots),
  bookings: Object.values(entities.bookings),
  reviews: Object.values(entities.reviews)
});

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id)),
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(msp, mdp)(BookingIndex);
