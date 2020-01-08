import axios from 'axios';
import * as yup from 'yup';
import groupBy from 'lodash/groupBy';
import isEqual from 'lodash/isEqual';
import clone from 'lodash/clone';

export function getForm(slug) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      dispatch({
        type: 'GET_FORM_REQUESTED'
      });

      // let form;

      axios.get(`${window._env_.FORM_CMS_URL}/form/NLPQL_form_content/${slug}/questions`)
      // TODO -- here we are temporarily turning off validation of old form while
      //contructing new from structure
      // .then(res => {
      //   form = res.data;
      //   return schema.validate(form.questions);
      // })
      // .then(() => {
      //   return new Promise(function(resolve, reject) {
      //     const groups = Object.keys(groupBy(form.questions, function(q) {
      //       return q.group;
      //     }));
      //     return isEqual(clone(form.groups).sort(), clone(groups).sort()) ?
      //       resolve() :
      //       reject('Mismatch between the top-level groups and the groups found in the questions themselves.');
      //   });
      // })
      .then(res => {
        const form = res.data;
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

export function testUpdateValue() {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'TEST_UPDATE_VALUE'
      })
      resolve();
    });
  }
}
