import axios from 'axios';

export function resolveActivityId(patientId, formSlug) {
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'RESOLVE_ACTIVITY_ID_REQUESTED',
      });

      return axios
        .post(`${window._env_.SMARTHUB_URL}/activities`, {
          patientId: patientId,
          formSlug: formSlug
        })
        .then(res => {
          const { data: activityId } = res;
          dispatch({
            type: 'RESOLVE_ACTIVITY_ID_FULFILLED',
            activityId: activityId
          });
          return resolve(activityId);
        })
        .catch(error => {
          dispatch({
            type: 'RESOLVE_ACTIVITY_ID_REJECTED',
            error: error.message
          });
          return reject(error);
        });
    });
  }
}

export function getActivity(activityId) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'GET_ACTIVITY_REQUESTED'
      });
      axios.get(`${window._env_.SMARTHUB_URL}/activities/${activityId}`)
      .then(res => {
        const { data: activity } = res;
        dispatch({
          type: 'GET_ACTIVITY_FULFILLED',
          activity: activity
        });
        resolve(`Finished retrieving activity.`);
      })
      .catch(error => {
        dispatch({
          type: 'GET_ACTIVITY_REJECTED',
          error: error.message || error
        })
        reject(error.message);
      })
    })
  }
}

export function saveActivityValues(activityId, values) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'SAVE_ACTIVITY_VALUES_REQUESTED'
      });

      var jsonse = JSON.stringify(values);
      var blob = new Blob([jsonse], {type: "application/json"});
      var url  = URL.createObjectURL(blob);

      var a = document.createElement('a');
      a.href        = url;
      a.download    = "values.json";
      a.textContent = "Download values.json";

      document.body.appendChild(a);
      a.click()

      // axios.put(`${window._env_.SMARTHUB_URL}/activities/${activityId}/values`, values)
      // .then(res => {
      //   dispatch({
      //     type: 'SAVE_ACTIVITY_VALUES_FULFILLED'
      //   });
      //   resolve(`Finished saving activity values.`);
      // })
      // .catch(error => {
      //   dispatch({
      //     type: 'SAVE_ACTIVITY_VALUES_REJECTED',
      //     error: error.message || error
      //   })
      //   reject(error.message);
      // })
    })
  }
}

export function saveActivityGroupLoadingState(activityId, groups) { //NOTE: could merge with request above, but I like the separation
  const groupLoadingStates = groups.allIds.reduce((acc, groupSlug) => {
    acc[groupSlug] = !!groups.byId[groupSlug].isLoaded;
    return acc;
  }, {});
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'SAVE_ACTIVITY_GROUP_LOADING_STATE_REQUESTED'
      });

      axios.put(`${window._env_.SMARTHUB_URL}/activities/${activityId}/groups`, groupLoadingStates)
      .then(res => {
        dispatch({
          type: 'SAVE_ACTIVITY_GROUP_LOADING_STATE_FULFILLED'
        });
        resolve(`Finished saving activity group loading state.`);
      })
      .catch(error => {
        dispatch({
          type: 'SAVE_ACTIVITY_GROUP_LOADING_STATE_REJECTED',
          error: error.message || error
        })
        reject(error.message);
      })
    })
  }
}

export function saveActivityAutofillIds(activityId, groups) {
  const autofillIds = groups.allIds.reduce((acc, groupSlug) => {
    return {
      ...acc,
      ...groups.byId[groupSlug].questions.allIds.reduce((acc, questionSlug) => {
        return {
          ...acc,
          [questionSlug]: groups.byId[groupSlug].questions.byId[questionSlug].autofillId
        }
      }, {})
    }
  }, {});
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      dispatch({
        type: 'SAVE_ACTIVITY_AUTOFILL_IDS_REQUESTED'
      });

      axios.put(`${window._env_.SMARTHUB_URL}/activities/${activityId}/autofillIds`, autofillIds)
      .then(res => {
        dispatch({
          type: 'SAVE_ACTIVITY_AUTOFILL_IDS_FULFILLED'
        });
        resolve(`Finished saving activity autofill ids.`);
      })
      .catch(error => {
        dispatch({
          type: 'SAVE_ACTIVITY_AUTOFILL_IDS_REJECTED',
          error: error.message || error
        })
        reject(error.message);
      })
    })
  }
}
