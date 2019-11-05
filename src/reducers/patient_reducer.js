const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadError: false,
  data: {
    patient: null,
    docRefs: []
  }
};

export function patientReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_PATIENT_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        data: {
          patient: null,
          docRefs: []
        }
      }
    }
    case 'GET_PATIENT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        data: { ...action.data }
      }
    }
    case 'GET_PATIENT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true,
      }
    }
    default:
      return state;
  }
}
