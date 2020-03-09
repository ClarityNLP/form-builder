import axios from 'axios';

export function fetchGroupEvidenceAndAutofill(groupSlug) {
  return (dispatch, getState) => {
    return new Promise(function(resolve, reject) {
      const {
        fhir,
        source,
        activity
      } = getState();

      const {
        isLoaded: isGroupLoaded,
        evidences: groupEvidences,
        questions: groupQuestions
      } = activity.groups.byId[groupSlug];

      const {
        evidences: allEvidences,
        slug: formSlug
      } = activity;

      const {
        client : fhirClient,
        release : fhirVersion
      } = fhir;

      const {
        id : sourceId
      } = source;

      if (isGroupLoaded) {
        return resolve('Group\'s evidence and autofilling is completed');
        //TODO: consider add dispatch of 'GET_GROUP_EVIDENCE_AND_AUTOFILL_FULFILLED'
        //to kick off lazy load for other groups...
      }

      dispatch({
        type: 'GET_GROUP_EVIDENCE_AND_AUTOFILL_REQUESTED',
        groupSlug: groupSlug
      });

      Promise.all(groupEvidences.map(evid => {
          return maybeGetEvidence(evid)
          .then(() => {
            return Promise.all(
              groupQuestions.allIds
              .filter(q => groupQuestions.byId[q].evidence === evid)
              .map(q => maybeAutofill(groupSlug, { ...groupQuestions.byId[q], slug: q }))
            );
          })
        }))
        .then(() => {
          dispatch({
            type: 'GET_GROUP_EVIDENCE_AND_AUTOFILL_FULFILLED',
            groupSlug: groupSlug
          });
          return resolve('Group\'s evidence and autofilling is completed');
        })
        .catch(error => {
          dispatch({
            type: 'GET_GROUP_EVIDENCE_AND_AUTOFILL_REJECTED',
            groupSlug: groupSlug,
            error: error
          });
          return reject(error);
        });

      function maybeGetEvidence(evid) {
        return new Promise(function(resolve, reject) {
          // if (allEvidences[evid].byId) { //TODO now it's harder to do this since data is nested under features, but need to do...
          //   return resolve('Evidence already retrieved, no need to fire request.');
          // }

          dispatch({
            type: 'GET_EVIDENCE_REQUESTED',
            evidenceSlug: evid
          });

          return axios
            .post(`${window._env_.SMARTHUB_URL}/activities/${activity.id}/evidences/${evid}`, {
              fhirClient: fhirClient || {},
              fhirVersion: fhirVersion || 2,
              source_id: sourceId || 'FAKE_SOURCE_ID',
              formSlug: formSlug
            })
            .then(res => {
              dispatch({
                type: 'GET_EVIDENCE_FULFILLED',
                evidenceSlug: evid,
                data: res.data
              });
              return resolve('Evidence bundle retieved.');
            })
            .catch(error => {
              dispatch({
                type: 'GET_EVIDENCE_REJECTED',
                evidenceSlug: evid,
                error: error.message
              });
              return reject(error);
            });
        });
      }

      function maybeAutofill(groupSlug, question) {
        return new Promise(function(resolve, reject) {
          if (question.value || !question.autofill) {
            return resolve('Question has value already or question does not contain autofill operation.');
          }

          dispatch({
            type: 'AUTOFILL_QUESTION_REQUESTED',
            groupSlug: groupSlug,
            questionSlug: question.slug
          });

          return axios
          .post(`${window._env_.SMARTHUB_URL}/activities/${activity.id}/questions/${question.slug}/autofill`, {
            autofill: {
              ...question.autofill,
              type: question.type
            }
          })
          .then(res => {
            const { value, id } = res.data;
            dispatch({
              type: 'AUTOFILL_QUESTION_FULFILLED',
              groupSlug: groupSlug,
              questionSlug: question.slug,
              value: value,
              id: id
            });
            return resolve('Question autofill fulfilled');
          })
          .catch(error => {
            const { message, id } = error.response.data;
            dispatch({
              type: 'AUTOFILL_QUESTION_REJECTED',
              groupSlug: groupSlug,
              questionSlug: question.slug,
              error: message,
              id: id
            });
            return reject(error);
          });
        })
      }
    })
  }
}
