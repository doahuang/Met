import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { deleteReview } from '../../actions/review';

const msp = (state, ownProps) => ({
  reviews: ownProps.reviews
});

const mdp = dispatch => ({
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(msp, mdp)(ReviewIndex);
