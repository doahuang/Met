import { connect } from 'react-redux';

import { clear } from '../../actions/session';
import { createReview } from '../../actions/review';
import CreateReview from './create_review';

const _nullReview = {
  rating: null, body: '', spotId: null, reviewerId: null
};

const msp = ({ errors }, ownProps) => ({
  errors: errors.session,
  review: _nullReview
});

const mdp = dispatch => ({
  submit: review => dispatch(createReview(review)),
  clear: () => dispatch(clear())
});

export default connect(msp, mdp)(CreateReview);
