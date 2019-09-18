import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';

const initialState = {};
const logger = createLogger();

export default function configureStore(history) {
  let store;

  if (process.env.NODE_ENV === 'development') {
    store = createStore(
      reducer(history),
      initialState,
      compose(applyMiddleware(routerMiddleware(history), thunk, logger))
    );
  } else {
    store = createStore(
      reducer(history),
      initialState,
      compose(applyMiddleware(routerMiddleware(history), thunk))
    );
  }

  return store;
}
