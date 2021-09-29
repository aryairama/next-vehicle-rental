import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';

const rootReducers = combineReducers({
  user: userReducer,
  reservation: reservationReducer,
  loader: loaderReducer,
});

export default rootReducers;
