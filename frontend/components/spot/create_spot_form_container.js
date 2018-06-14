import { connect } from 'react-redux';

import { createSpot, fetchSpots } from '../../actions/spot';
import { clear } from '../../actions/session';
import { updateBounds } from '../../actions/filter';
import SpotForm from './spot_form';

const _newSpot = {
  name: '', imageUrl: '', landscape: '', size: '', price: '', description: '',
  latitude: 37.7758, longitude: -122.435
}

const msp = ({ errors }) => ({
  spot: _newSpot,
  formType: 'Let\'s get started listing your spot.',
  errors: errors.session
});

const mdp = dispatch => ({
  submit: spot => dispatch(createSpot(spot)),
  clear: () => dispatch(clear()),
  fetchSpots: data => dispatch(fetchSpots(data)),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(msp, mdp)(SpotForm);
