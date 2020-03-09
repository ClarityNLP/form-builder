import axios from 'axios';

export function getSourceId(docs) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      if (!docs || docs.length === 0) {
        dispatch({
          type: 'GET_SOURCE_ID_FULFILLED',
          data: {
            sourceId: null,
            message: 'Empty docs.'
          }
        });
        return resolve('Patient has no documents.')
      }

      dispatch({
        type: 'GET_SOURCE_ID_REQUESTED'
      });

      axios.post(`${window._env_.NLPAAS_URL}/report/upload`, {
        reports: docs
      })
      .then(res => {
        dispatch({
          type: 'GET_SOURCE_ID_FULFILLED',
          data: {
            sourceId: res.data.source_id,
            message: 'Finished retrieving source id.'
          }
        });
        return resolve('Finished retrieving source id.');
      })
      .catch(error => {
        dispatch({
          type: 'GET_SOURCE_ID_REJECTED',
          error: error.message
        })
        return reject(error.message);
      })
    })
  }
}
