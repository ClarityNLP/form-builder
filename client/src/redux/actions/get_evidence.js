import axios from 'axios';

import { SET_EVIDENCE, SET_EVIDENCE_SUCCESS, SET_EVIDENCE_FAIL } from './types';

const generatePromises = (patient, fhir, nlpql) => {
  let promises = [];

  const postData = {
    reports: patient.documents,
    patient_id: patient.id,
    fhir: fhir
  };

  for (let query of nlpql) {
    const url = process.env.REACT_APP_CLARITY_NLPAAS_URL + query;

    promises.push(
      axios
        .post(url, postData)
        .then(response => {
          const data = {
            [query]: response.data.filter(result => {
              return (
                result.hasOwnProperty('nlpql_feature') &&
                result.nlpql_feature !== 'null'
              );
            })
          };

          return data;
        })
        .catch(err => {
          return { [query]: [err] };
        })
    );
  }

  return promises;
};

export const getEvidence = (patient, fhir, form) => dispatch => {
  dispatch({
    type: SET_EVIDENCE
  });

  let nlpql = [];

  if (form) {
    for (let question of form.questions) {
      const queries = Object.keys(question.evidence_bundle);

      for (let query of queries) {
        if (!nlpql.includes(query) && query.trim() !== '') {
          nlpql.push(query);
        }
      }
    }
  }

  Promise.all(generatePromises(patient, fhir, nlpql))
    .then(results => {
      let tmpData = {};

      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        let entries = Object.entries(obj)[0];
        let key = entries[0];
        let value = entries[1];

        tmpData[key] = value;
      }

      dispatch({
        type: SET_EVIDENCE_SUCCESS,
        data: tmpData
      });
    })
    .catch(err => {
      dispatch({
        type: SET_EVIDENCE_FAIL,
        data: err
      });
    });
};
