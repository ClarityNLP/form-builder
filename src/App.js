import React from 'react';
import logo from './logo.svg';
import "./style/style.scss";
import configureStore from './store/store';
import ApiClient from './helpers/ApiClient';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import SmartChart from './containers/smart_chart_container';
// import FormBuilder from './containers/form_builder_container';
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
          <Route exact path="/" component={Launcher}/>
          <Route path="/app/a/:activityId" component={SmartChart}/>
          <Route path="/app/f/:formSlug" component={SmartChart}/>
          <Route path="/app/catalog" component={SmartChart}/>
          <Redirect to="/app/catalog"/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
