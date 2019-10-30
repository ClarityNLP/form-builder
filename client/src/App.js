import React from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import Launch from './Launch';
import './styles/style.scss';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/launch' component={Launch} />
      <Route path='/' component={Main} />
    </ConnectedRouter>
  </Provider>
);

export default App;
