import { connect } from 'react-redux';

import { fetchSpots } from '../../actions/spot';
import { fetchReviews } from '../../actions/review';
import { updateBounds } from '../../actions/filter';
import Search from './search';

const msp = ({ entities }) => {
  return {
    spots: Object.values(entities.spots),
    reviews: Object.values(entities.reviews)
  };
};

const mdp = dispatch => ({
  fetchSpots: () => dispatch(fetchSpots()),
  fetchReviews: () => dispatch(fetchReviews()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(msp, mdp)(Search);
