const initialState = {};

export function evidenceReducer(state = initialState, action = {}) {
  switch(action.type) {
    // case 'GET_EVIDENCE_REQUESTED': { //TODO not being used, do we need it?
    //   return {
    //     ...state,
    //     [action.data.nlpql]: {
    //       results: [],
    //       isLoading: true,
    //       isLoaded: false,
    //       isLoadError: false
    //     }
    //   }
    // }
    case 'GET_EVIDENCE_REJECTED': {
      const { evidence, error } = action.data;

      return {
        ...state,
        [evidence]: {
          results: [],
          isLoading: false,
          isLoaded: false,
          isLoadError: true,
          errorMessage: error
        }
      }
    }
    case 'GET_EVIDENCE_FULFILLED': {
      const { evidence, results } = action.data;

      return {
        ...state,
        [evidence]: {
          results: results,
          isLoading: false,
          isLoaded: true,
          isLoadError: false,
          errorMessage: null
        }
      }
    }
    case 'GET_FORM_REQUESTED': {
      return {};
    }
    default:
      return state;
  }
}
