const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  forms: []
};

export function catalogReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_CATALOG_CONTENT_REQUESTED': {
      return {
        ...state,
        // isLoading: true,
        // isLoaded: false,
        // isLoadError: false,
        // client: null
      }
    }
    case 'GET_CATALOG_CONTENT_FULFILLED': {
      return {
        ...state,
        forms: action.data,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
      }
    }
    case 'GET_CATALOG_CONTENT_REJECTED': {
      return {
        ...state,
        // isLoading: false,
        // isLoaded: false,
        // isLoadError: true,
      }
    }
    case 'GET_FORM_REQUESTED': {
      return {
        ...state,
        isVisible: false
      }
    }
    case 'GET_FORM_REJECTED': {
      return {
        ...state,
        isVisible: true
      }
    }
    default:
      return state;
  }
}
