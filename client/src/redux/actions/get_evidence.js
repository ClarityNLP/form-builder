import axios from 'axios';

import { ADD_EVIDENCE, ADD_EVIDENCE_SUCCESS, ADD_EVIDENCE_FAIL } from './types';

export const getEvidence = (patient, smart, form) => dispatch => {
  const postData = {
    reports: patient.docs,
    fhir: smart
  };

  console.log('ACCESS TOKEN: ', smart.state.tokenResponse.access_token);

  for (let query of ['wbc_hematologic_findings']) {
    const url = window._env_.REACT_APP_CLARITY_NLPAAS_URL + query;
    // const url = process.env.REACT_APP_CLARITY_NLPAAS_URL_DEV + query;

    dispatch({
      type: ADD_EVIDENCE,
      data: {
        nlpql: query
      }
    });

    axios
      .post(url, postData)
      .then(response => {
        dispatch({
          type: ADD_EVIDENCE_SUCCESS,
          data: {
            nlpql: query,
            results: response.data.filter(result => {
              return (
                result.hasOwnProperty('nlpql_feature') &&
                result.nlpql_feature !== 'null'
              );
            })
          }
        });
      })
      .catch(err => {
        dispatch({
          type: ADD_EVIDENCE_FAIL,
          data: {
            nlpql: query,
            results: [err]
          }
        });
      });
  }
};
