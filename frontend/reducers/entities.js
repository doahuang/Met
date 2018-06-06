import { combineReducers } from 'redux';
import usersReducer from './users';
import spotsReducer from './spots';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer
  // bookings: bookingsReducer,
  // reviews: reviewsReducer,
});

export default entitiesReducer;
