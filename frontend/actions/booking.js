import * as APIUtil from '../utils/booking';
import { receiveSessionErrors } from './session'; //to change

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';

const receiveBookings = bookings => ({ type: RECEIVE_BOOKINGS, bookings });
const receiveBooking = booking => ({ type: RECEIVE_BOOKING, booking });
const removeBooking = id => ({ type: REMOVE_BOOKING, id });

export const fetchBookings = () => dispatch => {
  return APIUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)));
}

export const createBooking = booking => dispatch => {
  return APIUtil.createBooking(booking)
    .then(booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveSessionErrors(err.responseJSON)));
}

export const deleteBooking = id => dispatch => {
  return APIUtil.deleteBooking(id).then(booking => dispatch(removeBooking(id)));
}
