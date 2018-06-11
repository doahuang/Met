import { connect } from 'react-redux';

import { createSpot } from '../../actions/spot';
import SpotForm from './spot_form';

const _newSpot = {
  name: '', imageUrl: '', landscape: '', size: '', price: '', description: ''
}

const msp = ({ errors }) => ({
  spot: _newSpot,
  formType: 'Let\'s get started listing your spot.',
  errors: errors.session
});

const mdp = dispatch => ({
  submit: spot => dispatch(createSpot(spot))
});

export default connect(msp, mdp)(SpotForm);
