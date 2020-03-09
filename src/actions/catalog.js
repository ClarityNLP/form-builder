import axios from 'axios';
import * as yup from 'yup';
import groupBy from 'lodash/groupBy';
import isEqual from 'lodash/isEqual';
import clone from 'lodash/clone';

yup.addMethod(yup.array, 'unique', function (message, mapper= a=>a) {
    return this.test('unique', message, function (list) {
        return list.length  === new Set(list.map(mapper)).size;
    });
});

const schema = yup
  .array()
  .of(
    yup.object().shape({
      answers: yup.array(),
      evidence_bundle: yup.object(),
      nlpql_grouping: yup.string(),
      question_name: yup.string(),
      question_number: yup.string(),
      question_type: yup.string()
    })
  )
  .unique('Duplicate question number.', a => a.question_number)

export function getCatalogContent() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_CATALOG_CONTENT_REQUESTED'
      });

      axios.get(`${window._env_.FORM_CMS_URL}/forms`)
      .then(res => {
        dispatch({
          type: 'GET_CATALOG_CONTENT_FULFILLED',
          data: res.data
        });
        resolve('Finished retrieving catalog content.');
      })
      .catch(error => {
        dispatch({
          type: 'GET_CATALOG_CONTENT_REJECTED',
          error: error.message
        })
        reject(error.message);
      })
    })
  }
}

export function getForm(slug) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_FORM_REQUESTED'
      });

      let form;

      axios.get(`${window._env_.FORM_CMS_URL}/form/NLPQL_form_content/${slug}/questions`)
      .then(res => {
        form = res.data;
        return schema.validate(form.questions);
      })
      .then(() => {
        return new Promise(function(resolve, reject) {
          const groups = Object.keys(groupBy(form.questions, function(q) {
            return q.group;
          }));
          return isEqual(clone(form.groups).sort(), clone(groups).sort()) ?
            resolve() :
            reject('Mismatch between the top-level groups and the groups found in the questions themselves.');
        });
      })
      .then(() => {
        dispatch({
          type: 'GET_FORM_FULFILLED',
          data: {
            slug: slug,
            ...form
          }
        });
        resolve(`Finished retrieving form ${slug}`);
      })
      .catch(error => {
        console.log('error: ',error);
        dispatch({
          type: 'GET_FORM_REJECTED',
          error: error.message || error
        })
        reject(error.message);
      })
    })
  }
}

export function resetForm() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'RESET_FORM'
      });

      resolve();
    });
  }
}

export function openCatalog() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'OPEN_CATALOG'
      });

      resolve();
    });
  }
}

export function closeCatalog() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'CLOSE_CATALOG'
      });

      resolve();
    });
  }
}
