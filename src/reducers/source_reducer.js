const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadError: false,
  message: null,
  id: null
};

export function sourceReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_SOURCE_ID_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        message: null,
        id: null
      }
    }
    case 'GET_SOURCE_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        message: action.data.message,
        id: action.data.sourceId
      }
    }
    case 'GET_SOURCE_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true
      }
    }
    default:
      return state;
  }
}
