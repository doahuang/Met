import { connect } from 'react-redux';

import BookingForm from './booking_form';
import { createBooking } from '../../actions/booking';
import { clear } from '../../actions/session';

const _nullBooking = {
  beginDate: null, endDate: null, guests: 1
}

const msp = ({ errors }, ownProps) => ({
  errors: errors.session,
  booking: _nullBooking
});

const mdp = dispatch => ({
  submit: booking => dispatch(createBooking(booking)),
  clear: () => dispatch(clear())
});

export default connect(msp, mdp)(BookingForm);
