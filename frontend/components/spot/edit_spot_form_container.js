import React from 'react';
import { connect } from 'react-redux';

import { updateSpot } from '../../actions/spot';
import SpotForm from './spot_form';

const msp = ({ entities }, ownProps) => ({
  spot: entities.spots[ownProps.match.params.spotId],
  formType: 'Now let\'s update some details about your spot.'
});

const mdp = dispatch => ({
  submit: spot => dispatch(updateSpot(spot))
});

export default connect(msp, mdp)(SpotForm);
