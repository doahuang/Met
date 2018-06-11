import { combineReducers } from 'redux';
import usersReducer from './users';
import spotsReducer from './spots';
import reviewsReducer from './reviews';

const entitiesReducer = combineReducers({
  users: usersReducer,
  spots: spotsReducer,
  reviews: reviewsReducer
  // bookings: bookingsReducer,
});

export default entitiesReducer;
