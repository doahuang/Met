import { connect } from 'react-redux';

import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking';
import { fetchReviews } from '../../actions/review';

const msp = ({ entities }) => ({
  bookings: Object.values(entities.bookings),
  reviews: Object.values(entities.reviews)
});

const mdp = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id)),
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(msp, mdp)(BookingIndex);
