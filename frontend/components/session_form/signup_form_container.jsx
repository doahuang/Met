import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session';
import Form from './form';

const msp = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign up',
  quickLink: <div><span>Already have a Met account?</span><Link to='/login'>Log in</Link></div>
});

const mdp = dispatch => ({
  submit: user => dispatch(signup(user))
});

export default connect(msp, mdp)(Form);
