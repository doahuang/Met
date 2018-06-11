import { connect } from 'react-redux';

import { deleteReview } from '../../actions/review';
import ReviewIndex from './review_index';

const msp = (state, ownProps) => ({
  reviews: ownProps.reviews
});

const mdp = dispatch => ({
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(msp, mdp)(ReviewIndex);
