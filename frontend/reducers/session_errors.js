import { RECEIVE_ERRORS, RECEIVE_USER } from '../actions/session';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;
