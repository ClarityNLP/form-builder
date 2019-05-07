import { Base64 } from 'js-base64';
import axios from 'axios';

import { SET_EVIDENCE, SET_EVIDENCE_SUCCESS, SET_EVIDENCE_FAIL } from './types';

const generatePromises = (docs, nlpql) => {
  let promises = [];

  for (let query of nlpql) {
    const url = process.env.REACT_APP_CLARITY_NLPAAS_URL + query;

    promises.push(
      axios
        .post(url, {
          reports: docs
        })
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

export const getEvidence = (patient, form) => dispatch => {
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

  let docs = patient.documents.map(data => {
    if (data.content && data.content.length > 0) {
      let txt = '';

      for (let i in data.content) {
        if (data.content.hasOwnProperty(i)) {
          if (data.content[i].hasOwnProperty('attachment')) {
            let att = data.content[i]['attachment'];
            txt = txt + Base64.decode(att['data']) + '\n';
          }
        }
      }

      return txt;
    }
    return '';
  });

  Promise.all(generatePromises(docs, nlpql))
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
