import { connect } from 'react-redux';

import { fetchReviews, deleteReview } from '../../actions/review';
import ReviewIndex from './review_index';

const msp = ({ entities }, ownProps) => ({
  reviews: Object.values(entities.reviews)
});

const mdp = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(msp, mdp)(ReviewIndex);
