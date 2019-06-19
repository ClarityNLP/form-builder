import * as types from '../actions/types';
import results from './tmp_results';

const initialState = {
  loading_smart: false,
  smart: {},
  smart_error: '',
  loading_patient: false,
  patient: {},
  patient_error: '',
  loading_form: false,
  form: null,
  form_error: '',
  loading_evidence: false,
  evidence: results,
  evidence_error: '',
  index_date: {
    start: null,
    end: new Date()
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SMART:
      return {
        ...state,
        loading_smart: true
      };
    case types.SET_SMART_SUCCESS:
      return {
        ...state,
        loading_smart: false,
        smart: action.data
      };
    case types.SET_SMART_FAIL:
      return {
        ...state,
        loading_smart: false,
        smart_error: action.data
      };
    case types.SET_PATIENT:
      return {
        ...state,
        loading_patient: true
      };
    case types.SET_PATIENT_SUCCESS:
      return {
        ...state,
        loading_patient: false,
        patient: action.data
      };
    case types.SET_PATIENT_FAIL:
      return {
        ...state,
        loading_patient: false,
        patient_error: action.data
      };
    case types.SET_FORM:
      return {
        ...state,
        loading_form: true
      };
    case types.SET_FORM_SUCCESS:
      return {
        ...state,
        loading_form: false,
        form: action.data
      };
    case types.SET_FORM_FAIL:
      return {
        ...state,
        loading_form: false,
        form_error: action.data
      };
    case types.ADD_EVIDENCE:
      return {
        ...state,
        evidence: {
          ...state.evidence,
          [action.data.nlpql]: 'loading'
        }
      };
    case types.ADD_EVIDENCE_SUCCESS:
      return {
        ...state,
        evidence: {
          ...state.evidence,
          [action.data.nlpql]: action.data.results
        }
      };
    case types.ADD_EVIDENCE_FAIL:
      return {
        ...state,
        evidence: {
          ...state.evidence,
          [action.data.nlpql]: action.data.results
        }
      };
    case types.SET_DATE:
      return {
        ...state,
        index_date: action.data
      };
    default:
      return state;
  }
};

export { reducer };
