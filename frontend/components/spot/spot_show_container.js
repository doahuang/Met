import { connect } from 'react-redux';
import { fetchSpot } from '../../actions/spot';
import SpotShow from './spot_show';

const _nullSpot = {
  name: '',
  imageUrl: '',
  latitude: null,
  longitude: null,
  landscape: '',
  location: '',
  size: null,
  price: null,
  description: ''
}

const msp = ({ entities }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId] || _nullSpot
});

const mdp = dispatch => ({
  fetchSpot: spot => dispatch(fetchSpot(spot))
});

export default connect(msp, mdp)(SpotShow);
