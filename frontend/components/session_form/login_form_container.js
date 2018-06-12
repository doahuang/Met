import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, clear } from '../../actions/session';
import SessionForm from './session_form';

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: 'Log in',
  quickLink:
    <div><span>Don’t have an account?</span><Link to='/signup'>Sign up</Link></div>
});

const mdp = dispatch => ({
  submit: user => dispatch(login(user)),
  clear: () => dispatch(clear())
});

export default connect(msp, mdp)(SessionForm);
