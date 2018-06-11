import { connect } from 'react-redux';

import { createReview } from '../../actions/review';
import CreateReview from './create_review';

const msp = ({ errors }, ownProps) => ({
  errors: errors.session,
  review: { rating: null, body: '', spotId: null }
});

const mdp = dispatch => ({
  submit: review => dispatch(createReview(review))
});

export default connect(msp, mdp)(CreateReview);
