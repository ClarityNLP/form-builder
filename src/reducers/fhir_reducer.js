const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadError: false,
  client: null,
  release: null
};

export function fhirReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_FHIR_CLIENT_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        client: null
      }
    }
    case 'GET_FHIR_CLIENT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        client: action.client
      }
    }
    case 'GET_FHIR_CLIENT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true,
      }
    }
    case 'GET_FHIR_RELEASE_REQUESTED': {
      return {
        ...state
      }
    }
    case 'GET_FHIR_RELEASE_FULFILLED': {
      return {
        ...state,
        release: action.data
      }
    }
    case 'GET_FHIR_RELEASE_FULFILLED': {
      return {
        ...state,
        release: null
      }
    }
    default:
      return state;
  }
}
