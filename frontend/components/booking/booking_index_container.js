import { connect } from 'react-redux';

import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking';
import { fetchSpots } from '../../actions/spot';

const msp = ({ entities }) => ({
  bookings: Object.values(entities.bookings),
  spots: Object.values(entities.spots)
});

const mdp = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: id => dispatch(deleteBooking(id)),
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(msp, mdp)(BookingIndex);
