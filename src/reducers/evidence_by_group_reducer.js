const initialState = {};

export function evidenceByGroupReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_EVIDENCE_BY_GROUP_REQUESTED': {
      return {
        ...state,
        [action.data]: {
          isLoading: true,
          isLoaded: false,
          isLoadError: false,
          errorMessage: null
        }
      }
    }
    case 'GET_EVIDENCE_BY_GROUP_REJECTED': {
      const { error, groupName } = action.data;

      return {
        ...state,
        [groupName]: {
          isLoading: false,
          isLoaded: false,
          isLoadError: true,
          errorMessage: error
        }
      }
    }
    case 'GET_EVIDENCE_BY_GROUP_FULFILLED': {
      return {
        ...state,
        [action.data]: {
          isLoading: false,
          isLoaded: true,
          isLoadError: false,
          errorMessage: null
        }
      }
    }
    case 'GET_FORM_REQUESTED': {
      return {}
    }
    default:
      return state;
  }
}
