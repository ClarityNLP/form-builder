import form from '../tmp_form.js'

const initialState = {
  isLoading: false,
  isLoaded: true,
  isLoadError: false,
  focusQuestion: null,
  ...form
};

export function formReducer(state = initialState, action = {}) {
  switch(action.type) {
    // case 'GET_FORM_REQUESTED': { //TODO --> request form from api
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isLoaded: false,
    //     isLoadError: false
    //   }
    // }
    case 'FOCUS_QUESTION': { //TODO --> make this work
      return {
        ...state,
        focusQuestion: action.data
      }
    }
    default:
      return state;
  }
}
