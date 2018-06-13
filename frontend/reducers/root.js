import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducer from './errors';
import uiReducer from './ui';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
