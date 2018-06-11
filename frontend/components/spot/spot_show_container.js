import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot';
import { fetchReviews } from '../../actions/review';
import SpotShow from './spot_show';

const msp = ({ entities, session }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  currentUser: entities.users[session.id],
  reviews: Object.values(entities.reviews)
});

const mdp = dispatch => ({
  fetchSpot: spot => dispatch(fetchSpot(spot)),
  fetchReviews: () => dispatch(fetchReviews())
});

export default connect(msp, mdp)(SpotShow);
