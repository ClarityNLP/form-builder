import React from 'react';
import logo from './logo.svg';
import "./style/style.scss";
import configureStore from './store/store';
import ApiClient from './helpers/ApiClient';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import FormBuilder from './components/FormBuilder';

const history = createBrowserHistory()
const initialState = {}
const apiClient = new ApiClient();
const store = configureStore(initialState, apiClient, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <Route component={FormBuilder} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
