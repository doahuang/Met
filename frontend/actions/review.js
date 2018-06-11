import * as APIUtil from '../utils/review';
import { receiveSessionErrors } from './session'; //to change

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = reviews => ({ type: RECEIVE_REVIEWS, reviews });
const receiveReview = review => ({ type: RECEIVE_REVIEW, review });
const removeReview = id => ({ type: REMOVE_REVIEW, id });

export const fetchReviews = () => dispatch => {
  return APIUtil.fetchReviews().then(reviews => dispatch(receiveReviews(reviews)));
}

export const createReview = review => dispatch => {
  return APIUtil.createReview(review).then(review => dispatch(receiveReview(review)),
    err => dispatch(receiveSessionErrors(err.responseJSON)));
}

export const deleteReview = id => dispatch => {
  return APIUtil.deleteReview(id).then(review => dispatch(removeReview(id)));
}
