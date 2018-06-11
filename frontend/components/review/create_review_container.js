import { connect } from 'react-redux';

import { createReview } from '../../actions/review';
import CreateReview from './create_review';

const msp = (state, { spot, reviewer }) => ({
  review: {
    rating: null, body: '',
    spotId: spot ? spot.id : null,
    reviwerId: reviewer ? reviewer.id : null,
  }
});

const mdp = dispatch => ({
  submit: review => dispatch(createReview(review))
});

export default connect(msp, mdp)(CreateReview);
