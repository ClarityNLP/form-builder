import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers/root_reducer'
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

// MIDDLEWARES
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger"

const client = axios.create({ //all axios can be used, shown in axios documentation
  baseURL:'http://localhost:1337',
  responseType: 'json',
  withCredentials: true
});

const logger = createLogger()

export default function configureStore(initialState, apiClient, history) {

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        axiosMiddleware(client),
        logger
      ),
    )
  )

  return store;
}
