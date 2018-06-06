import * as APIUtil from '../utils/session';

export const RECEIVE_USER = 'RECEIVE_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const logoutUser = user => ({ type: LOGOUT_USER });
const receiveUser = user => ({ type: RECEIVE_USER, user });
const receiveErrors = errors => ({ type: RECEIVE_ERRORS, errors });

export const signup = user => dispatch =>
  APIUtil.signup(user).then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));

export const login = user => dispatch =>
  APIUtil.login(user).then(user => dispatch(receiveUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)));

export const logout = () => dispatch =>
  APIUtil.logout().then(user => dispatch(logoutUser(user)));
