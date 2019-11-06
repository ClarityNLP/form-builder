import React, { Component } from 'react';
import { oauth2 as SMART } from 'fhirclient';
import Transient from './Transient';

export default class Launcher extends Component {
  componentDidMount() {
    SMART.authorize({
      clientid: window._env_.FHIR_CLIENT_ID,
      scope: window._env_.FHIR_SCOPES,
      iss: window._env_.FHIR_ISS,
      // clientId: "my-client-id",
      // scope: "launch launch/patient patient/read offline_access",
      // redirectUri: "./app",
      // iss:
      //   "https://launch.smarthealthit.org/v/r3/sim/" +
      //   "eyJoIjoiMSIsImIiOiJmMDQ2MjkzNi1lYjRiLTRkYT" +
      //   "EtYjQ1YS1mYmQ5NmViZjhjY2IiLCJlIjoic21hcnQt" +
      //   "UHJhY3RpdGlvbmVyLTcxNjE0NTAyIn0/fhir"
      // clientId: '99b40a52-6745-4e1a-b2d1-c5cc7415c19e',
      // scope: 'launch profile openid online_access patient/Condition.read patient/DocumentReference.read patient/Encounter.read patient/MedicationStatement.read patient/MedicationRequest.read patient/Observation.read patient/Patient.read patient/Procedure.read',
      // iss: 'https://apps.hdap.gatech.edu/omoponfhir3/fhir'
    });
  }
  render() {
    return (
      <Transient/>
    );
  }
}
