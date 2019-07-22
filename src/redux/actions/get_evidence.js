import axios from 'axios';

import { ADD_EVIDENCE, ADD_EVIDENCE_SUCCESS, ADD_EVIDENCE_FAIL } from './types';

export const getEvidence = (patient, fhir, form) => dispatch => {
  const postData = {
    reports: patient.documents,
    patient_id: patient.id,
    fhir: fhir
  };

  for (let query of form.evidence_bundles) {
    const url = process.env.REACT_APP_CLARITY_NLPAAS_URL + query;

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
