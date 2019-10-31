import axios from 'axios';
import idx from 'idx';

export function getEvidenceByGroup(groupName, evidenceByGroup, questions) {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {

      // TODO if group has already been loaded...stop here...
      // if (evidenceByGroup)

      const testing = idx(evidenceByGroup, _ => _[groupName].friends);
      console.log('testing: ',testing);

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

      console.log('evidences arr: ',uniqueEvidArray);

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
              // results: res.data.filter(result => {
              //   return (
              //     result.hasOwnProperty('nlpql_feature') &&
              //     result.nlpql_feature !== 'null'
              //   );
              // })
              results: res.data
            }
          });
          return `Evidence *${evid}* finished retrieving.`;
        })
        .catch(error => {
          dispatch({
            type: 'GET_EVIDENCE_REJECTED',
            data: {
              evidence: evid,
              // results: res.data.filter(result => {
              //   return (
              //     result.hasOwnProperty('nlpql_feature') &&
              //     result.nlpql_feature !== 'null'
              //   );
              // })
              // results: res.data
              error: error //todo make better
            }
          })
        })
      });
      Promise.all(promiseArr)
      .then(values => {
        console.log('promise.all values: ',values);
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
          data: groupName
        })
      })
      .catch(error => {
        console.error('promise.all error: ',error.message)
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_REJECTED',
          data: {
            groupName: groupName,
            error: error.message
          }
        })
      });


      // dispatch({
      //   type: 'GET_EVIDENCE_BY_GROUP_REQUESTED',
      //   data: group
      // })
      // // console.log()
      // resolve();
    });
  }
}


// export const getEvidenceByGroup = (group, questions) => dispatch => {
//   // const postData = {
//   //   reports: patient.docs,
//   //   fhir: smart
//   // };
//
//   // console.log('ACCESS TOKEN: ', smart.state.tokenResponse.access_token);
//
//   for (let query of form.evidence_bundles) {
//     const url = window._env_.REACT_APP_CLARITY_NLPAAS_URL + query;
//     // const url = process.env.REACT_APP_CLARITY_NLPAAS_URL_DEV + query;
//
//     dispatch({
//       type: ADD_EVIDENCE,
//       data: {
//         nlpql: query
//       }
//     });
//
//     axios
//       .post(url, postData)
//       .then(response => {
//         dispatch({
//           type: ADD_EVIDENCE_SUCCESS,
//           data: {
//             nlpql: query,
//             results: response.data.filter(result => {
//               return (
//                 result.hasOwnProperty('nlpql_feature') &&
//                 result.nlpql_feature !== 'null'
//               );
//             })
//           }
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: ADD_EVIDENCE_FAIL,
//           data: {
//             nlpql: query,
//             results: [err]
//           }
//         });
//       });
//   }
// };
