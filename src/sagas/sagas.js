import { takeEvery, take, select, put, call, all, fork } from "redux-saga/effects";
import { push } from 'connected-react-router'
import axios from 'axios';

const fetchEvidence = (evidence, payload) => {
  return axios.post(`${window._env_.NLPAAS_URL}/4100r4/${evidence}`, payload)
}

export function* rootSaga() {
  yield fork(redirectNoFhirClient)
  yield fork(lazyLoadEvidence)
}

function* redirectNoFhirClient() {
  yield take('GET_FHIR_CLIENT_REJECTED');
  yield put(push('/'));
}

function* lazyLoadEvidence() {
    yield takeEvery('GET_EVIDENCE_BY_GROUP_FULFILLED', findNextGroup);
}

function* findNextGroup(action) {
  const { data: currentGroup } = action;

  const getState = state => {
    return {
      groups: state.form.groups,
      questions: state.form.questions,
      evidenceByGroup: state.evidenceByGroup
    }
  };

  const { groups, questions, evidenceByGroup } = yield select(getState);
  const currentGroupIndex = groups.findIndex(group => group === currentGroup);
  const offset = currentGroupIndex;

  for( var i=0; i < groups.length; i++) {
      var pointer = (i + offset) % groups.length;
      var group = groups[pointer];
      var evidArray = questions
        .filter(q => q.group === group)
        .filter(q => q.nlpql_grouping)

      if (!evidenceByGroup[group] && (evidArray.length > 0)) { //TODO add check for error and it can repeat!
        yield fetchGroupEvidence(group, evidenceByGroup, questions);
        break;
      }                                                     // || evidenceByGroup[group].isLoadError
  }
}

function* handleFetchEvidence(evidence) {

  //TODO add payload, instead of {} -->
  try {
    const json = yield call(fetchEvidence, evidence, {});

    yield put({
      type: 'GET_EVIDENCE_FULFILLED',
      data: {
        evidence: evidence,
        results: json.data.filter(result => {
          return (
            result.hasOwnProperty('nlpql_feature') && // NOTE: data is poorly formed,
            result.nlpql_feature !== 'null'           // sending strings of 'null'
          );
        })
      }
    });
    return json;
  } catch(error) {
    yield put({
      type: 'GET_EVIDENCE_REJECTED',
      data: {
        evidence: evidence,
        error: error.message
      }
    });
    return error;
  }
}

function* fetchGroupEvidence(groupName, evidenceByGroup, questions) {

  const __this = this;

  yield put({
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
    yield put({
      type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
      data: groupName
    });
    return;
  }

  yield all(uniqueEvidArray.map(evidence => call(handleFetchEvidence, evidence)));

  yield put({
    type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
    data: groupName
  });

  return;
}
