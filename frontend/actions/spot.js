import * as APIUtil from '../utils/spot';
import { receiveSessionErrors } from './session'; //to change

export const RECEIVE_SPOTS = 'RECEIVE_SPOTS';
export const RECEIVE_SPOT = 'RECEIVE_SPOT';

const receiveSpots = spots => ({ type: RECEIVE_SPOTS, spots });
const receiveSpot = spot => ({ type: RECEIVE_SPOT, spot });

export const fetchSpots = () => dispatch => {
  return APIUtil.fetchSpots().then(spots => dispatch(receiveSpots(spots)));
}

export const fetchSpot = id => dispatch => {
  return APIUtil.fetchSpot(id).then(spot => dispatch(receiveSpot(spot)));
}

export const createSpot = spot => dispatch => {
  return APIUtil.createSpot(spot).then(spot => dispatch(receiveSpot(spot)),
    err => dispatch(receiveSessionErrors(err.responseJSON)));
}

export const updateSpot = spot => dispatch => {
  return APIUtil.updateSpot(spot).then(spot => dispatch(receiveSpot(spot)),
    err => dispatch(receiveSessionErrors(err.responseJSON)));
}
