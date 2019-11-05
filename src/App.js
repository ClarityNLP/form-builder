import React from 'react';
import logo from './logo.svg';
import "./style/style.scss";
import configureStore from './store/store';
import ApiClient from './helpers/ApiClient';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import FormBuilder from './containers/form_builder_container';
import Launcher from './components/Launcher';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
const initialState = {}
const apiClient = new ApiClient();
const store = configureStore(initialState, apiClient, history);

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/app" component={FormBuilder} />
          <Route path="/" component={Launcher} exact />
          <Redirect to="/app"/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
