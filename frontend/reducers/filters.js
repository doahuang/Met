import merge from 'lodash/merge';
import { UPDATE_BOUNDS } from '../actions/filter';

const filtersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPDATE_BOUNDS:

      console.log('update bounds');
      
      return merge({}, state, { 'bounds': action.bounds });
    default:
      return state;
  }
}

export default filtersReducer;
