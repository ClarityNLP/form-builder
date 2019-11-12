import axios from 'axios';
import idx from 'idx';

export function getEvidenceByGroup(formSlug, groupName, evidenceByGroup, evidences, questions, fhirClient, docRefs) {
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
      // Important: w/i an unloaded evidence group, there is a chance that one of the
      // evidence bundles has already been loaded in a previous evidence group.
      // i.e. hematocrit_hematologic_findings in form 4100
      const uniqueUnloadedEvidArray = uniqueEvidArray.reduce((acc, current) => {
        return !evidences[current] ? [...acc, current] : acc;
      }, []);

      if (uniqueUnloadedEvidArray.length === 0) {  //if no evidences, dispatch that this groupName is done.
        dispatch({
          type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
          data: groupName
        })
        return resolve();
      }

      const promiseArr = uniqueUnloadedEvidArray.map(evid => {
        return axios
        .post(`${window._env_.NLPAAS_URL}/job/NLPQL_form_content/${formSlug}/${evid}`, {
          fhir: fhirClient,
          reports: docRefs
        })
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
