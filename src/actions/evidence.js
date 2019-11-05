import axios from 'axios';
import idx from 'idx';

export function getEvidenceByGroup(groupName, evidenceByGroup, questions) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      const isLoaded = idx(evidenceByGroup, _ => _.isLoaded);

      if (isLoaded) {
        return resolve(`Evidence group already loaded.`);
      }

      dispatch({
        type: 'GET_EVIDENCE_BY_GROUP_REQUESTED',
        data: groupName
      });

      const evidArray = questions
        .filter(q => q.group === groupName)
        .filter(q => q.nlpql_grouping)
        .map(q => q.nlpql_grouping)

      const uniqueEvidSet = new Set(evidArray);
      const uniqueEvidArray = [...uniqueEvidSet];

      if (uniqueEvidArray.length === 0) {  //if no evidences, dispatch that this groupName is done.
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
          data: groupName
        })
        return resolve();
      }

      const promiseArr = uniqueEvidArray.map(evid => {
        return axios
        .post(`http://localhost:1337/4100r4/${evid}`, {}) //TODO add data instead of {}
        .then(res => {
          dispatch({
            type: 'GET_EVIDENCE_FULFILLED',
            data: {
              evidence: evid,
              results: res.data.filter(result => {
                return (
                  result.hasOwnProperty('nlpql_feature') && // NOTE: data is poorly formed,
                  result.nlpql_feature !== 'null'           // sending strings of 'null'
                );
              })
            }
          });
          return `Evidence *${evid}* finished retrieving.`;
        })
        .catch(error => {
          dispatch({
            type: 'GET_EVIDENCE_REJECTED',
            data: {
              evidence: evid,
              error: error.message
            }
          })
        })
      });
      Promise.all(promiseArr)
      .then(values => {
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
          data: groupName
        })
      })
      .catch(error => {
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_REJECTED',
          data: {
            groupName: groupName,
            error: error.message
          }
        })
      });
    });
  }
}
