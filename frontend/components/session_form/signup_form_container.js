import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, clear } from '../../actions/session';
import SessionForm from './session_form';

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign up',
  quickLink:
    <div><span>Already have a Met account?</span><Link to='/login'>Log in</Link></div>
});

const mdp = dispatch => ({
  submit: user => dispatch(signup(user)),
  clear: () => dispatch(clear())
});

export default connect(msp, mdp)(SessionForm);
