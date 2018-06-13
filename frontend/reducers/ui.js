import { combineReducers } from 'redux';
import filtersReducer from './filters';

const uiReducer = combineReducers({
  filters: filtersReducer
});

export default uiReducer;
