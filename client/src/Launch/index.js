import React, { Component } from 'react';
import FHIR from 'fhirclient';
import Loader from '../Loader';

export default class Launch extends Component {
  componentWillMount() {
    FHIR.oauth2.authorize({
      client_id: window._env_.REACT_APP_CLIENT_ID,
      scope: window._env_.REACT_APP_SCOPES,
      iss: window._env_.REACT_APP_ISS
    });
  }

  render() {
    return <Loader />;
  }
}
