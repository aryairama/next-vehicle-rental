import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducer/rootReducers';
import { persistReducer } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'js-cookie';
const persistConfig = {
  key: 'vehicleRental',
  keyPrefix: '',
  timeout: 100,
  storage: new CookieStorage(Cookies, {
    setCookieOptions: {
      path: '/',
      secure: true,
    },
  }),
  whitelist: ['user', 'reservation'],
};

let store;
export const persistedReducer = persistReducer(persistConfig, rootReducers);
function initStore(initialState = {}) {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(persistedReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
  }
  return createStore(persistedReducer, initialState, applyMiddleware(thunkMiddleware));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
