import { connect } from 'react-redux';

import { createSpot, fetchSpots } from '../../actions/spot';
import { clear } from '../../actions/session';
import SpotForm from './spot_form';

const msp = ({ errors }) => ({
  spot: _newSpot,
  hello: 'Let\'s get started listing your spot.',
  errors: errors.session
});

const mdp = dispatch => ({
  submit: spot => dispatch(createSpot(spot)),
  clear: () => dispatch(clear())
});

export default connect(msp, mdp)(SpotForm);

const _newSpot = {
  name: '', landscape: '', size: '1', price: '0',
  imageUrl: 'https://res.cloudinary.com/doahuang/image/upload/v1533030970/met-default-spot-img.jpg',
  latitude: 0, longitude: 0, description: ''
}
