const initialState = {
  isLoading: false,
  isLoaded: false,
  isLoadError: false,
  focusQuestion: null,
  content: null
};

export function formReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_FORM_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false
      }
    }
    case 'GET_FORM_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        content: action.data
      }
    }
    case 'GET_FORM_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true,
        content: null
      }
    }
    case 'FOCUS_QUESTION': {
      return {
        ...state,
        focusQuestion: action.data
      }
    }
    case 'RESET_FORM': {
      return {
        ...state,
        content: null
      }
    }
    default:
      return state;
  }
}
