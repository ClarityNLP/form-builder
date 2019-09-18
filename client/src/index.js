import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/store';
import { createBrowserHistory } from 'history';
import App from './App';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const store = configureStore(history);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
