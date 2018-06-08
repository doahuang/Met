import { connect } from 'react-redux';
import SpotIndex from './spot_index';
import { fetchSpots } from '../../actions/spot';

const msp = ({ entities }) => ({
  spots: Object.values(entities.spots)
});

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots())
});

export default connect(msp, mdp)(SpotIndex);
