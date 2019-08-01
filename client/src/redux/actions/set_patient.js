import { SET_PATIENT_SUCCESS, SET_PATIENT } from './types';
import axios from 'axios';

let tmp_docs = [];
const calls = [];

export const setPatient = smart => dispatch => {
  dispatch({
    type: SET_PATIENT
  });

  const { access_token } = smart.state.tokenResponse;
  const { patient } = smart;

  let url =
    smart.state.serverUrl +
    '/DocumentReference?patient=' +
    smart.patient.id +
    '&_count=100';

  makeCall(url, access_token).then(response => {
    for (let i of response) {
      tmp_docs = [...tmp_docs, ...i.entry];
    }

    patient.read().then(patientData => {
      dispatch({
        type: SET_PATIENT_SUCCESS,
        data: {
          docs: tmp_docs,
          data: patientData
        }
      });
    });
  });
};

const makeCall = (url, token) => {
  return axios
    .get(url, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json+fhir',
        Accept: 'application/json+fhir'
      }
    })
    .then(response => {
      if (calls.length > 0) return calls;

      calls.push(response.data);

      return makeCall(response.data.link[1].url, token);
    })
    .catch(function() {
      return calls;
    });
};
