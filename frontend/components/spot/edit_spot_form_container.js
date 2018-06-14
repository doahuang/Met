import { connect } from 'react-redux';

import { updateSpot, fetchSpots } from '../../actions/spot';
import { clear } from '../../actions/session';
import { updateBounds } from '../../actions/filter';
import SpotForm from './spot_form';

const msp = ({ entities, errors }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  formType: 'Now let\'s update some details.',
  errors: errors.session
});

const mdp = dispatch => ({
  submit: spot => dispatch(updateSpot(spot)),
  clear: () => dispatch(clear()),
  fetchSpots: data => dispatch(fetchSpots(data)),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(msp, mdp)(SpotForm);
