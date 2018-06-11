import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot';
import SpotShow from './spot_show';

const msp = ({ entities, session }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  currentUser: entities.users[session.id],
  reviews: Object.values(entities.reviews) //to change
});

const mdp = dispatch => ({
  fetchSpot: spot => dispatch(fetchSpot(spot))
});

export default connect(msp, mdp)(SpotShow);
