import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Loader';
import Main from './Main';
import './styles/style.scss';

export default class App extends Component {
  componentDidMount() {
    if (window.FHIR) {
      window.FHIR.oauth2.authorize({
        client_id: 'claritynlp_forms',
        scope: 'patient/*.read'
      });
    }

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
        <Router basename={'/form-builder'}>
          <Switch>
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
