import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  user: userReducer,
  reservation: reservationReducer,
});

export default rootReducers;
