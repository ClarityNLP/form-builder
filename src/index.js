import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import AppContainer from './AppContainer';

const apiClient = axios.create({
  baseURL: `https://${process.env.REACT_APP_CLARITY_NLPAAS_URL}`,
  responseType: 'json',
  withCredentials: true
});

const store = configureStore(apiClient);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
