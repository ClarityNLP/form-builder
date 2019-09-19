import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducers';
import { routerMiddleware } from 'connected-react-router';

const initialState = {};
const logger = createLogger();

export default function configureStore(history) {
  return createStore(
    reducer(history),
    initialState,
    compose(applyMiddleware(routerMiddleware(history), thunk, logger))
  );
}
