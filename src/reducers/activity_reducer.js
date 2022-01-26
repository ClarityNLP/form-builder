const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  focusQuestion: null,
  errorMessage: null
};

export function activityReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_ACTIVITY_REQUESTED': {
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
        isLoadError: false,
        errorMessage: null
      }
    }
    case 'GET_ACTIVITY_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        isLoadError: false,
        ...action.activity
      }
    }
    case 'GET_ACTIVITY_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        isLoadError: true,
        errorMessage: action.error
      }
    }
    case 'RESET_FORM': { //TODO...
      return {
        ...state,
        content: null
      }
    }
    case 'GET_GROUP_EVIDENCE_AND_AUTOFILL_REQUESTED': {
      const { groupSlug } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              isLoading: true,
              isLoaded: false,
              isLoadError: false,
              errorMessage: null
            }
          }
        }
      }
    }
    case 'GET_GROUP_EVIDENCE_AND_AUTOFILL_FULFILLED': {
      const { groupSlug } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              isLoading: false,
              isLoaded: true,
              isLoadError: false,
              errorMessage: null
            }
          }
        }
      }
    }
    case 'GET_GROUP_EVIDENCE_AND_AUTOFILL_REJECTED': {
      const { groupSlug, error } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              isLoading: false,
              isLoaded: false,
              isLoadError: true,
              errorMessage: error
            }
          }
        }
      }
    }
    case 'GET_EVIDENCE_REQUESTED': {
      const { evidenceSlug } = action;
      return {
        ...state,
        evidences: {
          ...state.evidences,
          [evidenceSlug]: {
            ...state.evidences[evidenceSlug],
            isLoading: true,
            isLoaded: false,
            isLoadError: false,
            errorMessage: null
          }
        }
      }
    }
    case 'GET_EVIDENCE_FULFILLED': {
      const { evidenceSlug, data } = action;
      return {
        ...state,
        evidences: {
          ...state.evidences,
          [evidenceSlug]: {
            ...state.evidences[evidenceSlug],
            byId: data,
            isLoading: false,
            isLoaded: true,
            isLoadError: false,
            errorMessage: null
          }
        }
      }
    }
    case 'GET_EVIDENCE_REJECTED': {
      const { evidenceSlug, error } = action;
      return {
        ...state,
        evidences: {
          ...state.evidences,
          [evidenceSlug]: {
            ...state.evidences[evidenceSlug],
            isLoading: false,
            isLoaded: false,
            isLoadError: true,
            errorMessage: error
          }
        }
      }
    }
    case 'AUTOFILL_QUESTION_REQUESTED': {
      const { groupSlug, questionSlug } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              questions: {
                ...state.groups.byId[groupSlug].questions,
                byId: {
                  ...state.groups.byId[groupSlug].questions.byId,
                  [questionSlug]: {
                    ...state.groups.byId[groupSlug].questions.byId[questionSlug],
                    isAutofillLoading: true,
                    isAutofillLoaded: false,
                    isAutofillLoadError: false,
                    autofillLoadError: ''
                  }
                }
              }
            }
          }
        }
      }
    }
    case 'AUTOFILL_QUESTION_FULFILLED': {
      const { groupSlug, questionSlug, value, id } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              questions: {
                ...state.groups.byId[groupSlug].questions,
                byId: {
                  ...state.groups.byId[groupSlug].questions.byId,
                  [questionSlug]: {
                    ...state.groups.byId[groupSlug].questions.byId[questionSlug],
                    isAutofillLoading: false,
                    isAutofillLoaded: true,
                    isAutofillLoadError: false,
                    autofillLoadError: '',
                    value: value,
                    autofillId: id
                  }
                }
              }
            }
          }
        }
      }
    }
    case 'AUTOFILL_QUESTION_REJECTED': {
      const { groupSlug, questionSlug, error, id } = action;
      return {
        ...state,
        groups: {
          ...state.groups,
          byId: {
            ...state.groups.byId,
            [groupSlug]: {
              ...state.groups.byId[groupSlug],
              questions: {
                ...state.groups.byId[groupSlug].questions,
                byId: {
                  ...state.groups.byId[groupSlug].questions.byId,
                  [questionSlug]: {
                    ...state.groups.byId[groupSlug].questions.byId[questionSlug],
                    isAutofillLoading: false,
                    isAutofillLoaded: false,
                    isAutofillLoadError: true,
                    autofillLoadError: error,
                    autofillId: id
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
