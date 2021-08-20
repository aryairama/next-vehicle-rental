import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';

const rootReducers = combineReducers({
  reservation: reservationReducer,
});

export default rootReducers;
