const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  focusQuestion: null,
  errorMessage: null
};

export function formReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_FORM_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        errorMessage: null
      }
    }
    case 'GET_FORM_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        ...action.data
      }
    }
    case 'GET_FORM_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true,
        errorMessage: action.error
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
    //TODO REMOVE...
    case 'TEST_UPDATE_VALUE': {
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            group1: {
              ...state.groups.byId.group1,
              questions: {
                ...state.groups.byId.group1.questions,
                byId: {
                  ...state.groups.byId.group1.questions.byId,
                  question1: {
                    ...state.groups.byId.group1.questions.byId.question1,
                    value: 'yes'
                  }
                }
              }
            }
          }
        }
      }
    }
    default:
      return state;
  }
}
