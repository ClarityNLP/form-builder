import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './Loader';
import Main from './Main';
import './styles/style.scss';

export default class App extends Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV);

    if (window.FHIR) {
      window.FHIR.oauth2.authorize({
        client_id: '5273a313-c7ea-480b-9dd0-9055e0dd61f5',
        scope:
          'patient/Condition.read patient/DiagnosticReport.read patient/DocumentReference.read patient/MedicationAdministration.read patient/MedicationOrder.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Procedure.read launch profile openid online_access'
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
        <Router>
          <Switch>
            <Route path='/' component={Main} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
