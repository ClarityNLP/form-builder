import * as types from '../actions/types';
import CIBMTR_evidence from '../../tmp_results';

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
  evidence: CIBMTR_evidence,
  evidence_error: ''
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
    case types.SET_EVIDENCE:
      return {
        ...state,
        loading_evidence: true
      };
    case types.SET_EVIDENCE_SUCCESS:
      return {
        ...state,
        loading_evidence: false,
        evidence: action.data
      };
    case types.SET_EVIDENCE_FAIL:
      return {
        ...state,
        loading_evidence: false,
        evidence_error: action.data
      };
    default:
      return state;
  }
};

export { reducer };
