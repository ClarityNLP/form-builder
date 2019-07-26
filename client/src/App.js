import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Loader';
import Main from './Main';
import './styles/style.scss';

export default class App extends Component {
  componentDidMount() {
    this.props.setSmart().then(smart => {
      this.props.setPatient(smart);
    });
  }

  render() {
    const { loading_patient, loading_smart } = this.props.app;

    const loading = loading_patient || loading_smart;

    return loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
