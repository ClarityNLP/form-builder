const initialState = {};

export function evidenceReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_EVIDENCE_REQUESTED': {
      return {
        ...state,
        [action.data.nlpql]: {
          results: [],
          isLoading: true,
          isLoaded: false,
          isLoadError: false
        }
      }
    }
    case 'GET_EVIDENCE_REJECTED': {
      return {
        ...state,
        [action.data.nlpql]: {
          results: [],
          isLoading: false,
          isLoaded: false,
          isLoadError: true
        }
      }
    }
    case 'GET_EVIDENCE_FULFILLED': {
      return {
        ...state,
        [action.data.nlpql]: {
          results: action.data.results,
          isLoading: false,
          isLoaded: true,
          isLoadError: false
        }
      }
    }
    default:
      return state;
  }
}
