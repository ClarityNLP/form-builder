import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/root_reducer'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { lazyLoadEvidence } from '../sagas/lazy_load_evidence';

// MIDDLEWARES
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger"
import createSagaMiddleware from 'redux-saga';


const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL: window._env_.NLPAAS_URL,
  responseType: 'json',
  withCredentials: true
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, apiClient, history) {

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history),
        thunk,
        axiosMiddleware(client),
        logger
      ),
    )
  );

  sagaMiddleware.run(lazyLoadEvidence);

  return store;
}
