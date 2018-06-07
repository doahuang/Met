import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSpot, fetchSpot, updateSpot } from '../../actions/spot';
import SpotForm from './spot_form';

const _newSpot = {
  id: null,
  name: '',
  imageUrl: '',
  latitude: null,
  longitude: null,
  landscape: '',
  location: '',
  size: '',
  price: '',
  description: ''
}

const msp = ({ entities }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId] || _newSpot
});

const mdp = dispatch => ({
  fetchSpot: spot => dispatch(fetchSpot(spot)),
  createSpot: spot => dispatch(createSpot(spot)),
  updateSpot: spot => dispatch(updateSpot(spot))
});

export default withRouter(connect(msp, mdp)(SpotForm));
