import { takeEvery, take, select, put, call, all, fork } from "redux-saga/effects";
import { push } from 'connected-react-router'
import axios from 'axios';

const fetchEvidence = (formSlug, evidence, payload) => {
  return axios.post(`${window._env_.NLPAAS_URL}/job/NLPQL_form_content/${formSlug}/${evidence}`, payload)
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
      formSlug: state.form.content.slug,
      groups: state.form.content.groups,
      questions: state.form.content.questions,
      evidenceByGroup: state.evidenceByGroup,
      fhirClient: state.fhir.client,
      sourceId: state.source.id,
      evidences: state.evidence,
      fhirVersion: state.fhir.release
    }
  };

  const {
    formSlug,
    groups,
    questions,
    evidences,
    evidenceByGroup,
    fhirClient,
    sourceId,
    fhirVersion
  } = yield select(getState);

  const currentGroupIndex = groups.findIndex(group => group === currentGroup);
  const offset = currentGroupIndex;

  for( var i=0; i < groups.length; i++) {
      var pointer = (i + offset) % groups.length;
      var group = groups[pointer];
      var evidArray = questions
        .filter(q => q.group === group)
        .filter(q => q.nlpql_grouping)

      if (!evidenceByGroup[group] && (evidArray.length > 0)) { //TODO add check for error and it can repeat!
        yield fetchGroupEvidence(formSlug, group, evidenceByGroup, evidences, questions, fhirClient, sourceId, fhirVersion);
        break;
      }                                                     // || evidenceByGroup[group].isLoadError
  }
}

function* handleFetchEvidence(formSlug, evidence, fhirClient, sourceId, fhirVersion) {

  try {
    const json = yield call(fetchEvidence, formSlug, evidence, {
      fhir: fhirClient,
      fhirVersion: fhirVersion,
      source_id: sourceId
    });

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

function* fetchGroupEvidence(formSlug, groupName, evidenceByGroup, evidences, questions, fhirClient, sourceId, fhirVersion) {

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
  const uniqueUnloadedEvidArray = uniqueEvidArray.reduce((acc, current) => {
    return !evidences[current] ? [...acc, current] : acc;
  }, []);

  if (uniqueUnloadedEvidArray.length === 0) {  //if no evidences, dispatch that this groupName is done.
    yield put({
      type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
      data: groupName
    });
    return;
  }

  yield all(uniqueUnloadedEvidArray.map(evidence => call(handleFetchEvidence, formSlug, evidence, fhirClient, sourceId, fhirVersion)));

  yield put({
    type: 'GET_EVIDENCE_BY_GROUP_FULFILLED',
    data: groupName
  });

  return;
}
