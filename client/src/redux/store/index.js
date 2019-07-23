import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';

const initialState = {};
const logger = createLogger();

export default function configureStore() {
  let store;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(
      reducer,
      initialState,
      compose(applyMiddleware(thunk, logger))
    );
  } else {
    store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
  }

  return store;
}
