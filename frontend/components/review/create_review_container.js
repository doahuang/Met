import { connect } from 'react-redux';

import { createReview } from '../../actions/review';
import CreateReview from './create_review';

const _nullReview = {
  rating: null, body: ''
};

const msp = (state, ownProps) => ({
  review: _nullReview
});

const mdp = dispatch => ({
  submit: review => dispatch(createReview(review))
});

export default connect(msp, mdp)(CreateReview);
