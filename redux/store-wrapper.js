import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducer/rootReducers';
import thunk from 'redux-thunk';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducers(state, action);
  }
};

export const store = () => createStore(reducer, bindMiddleware([thunk]));
export const wrapper = createWrapper(store);
