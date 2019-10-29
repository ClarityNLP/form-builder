import form from '../tmp_form.js'

const initialState = {
  isLoading: false,
  isLoaded: true,
  isLoadError: false,
  ...form
};

export function formReducer(state = initialState, action = {}) {
  switch(action.type) {
    // case 'GET_FORM_REQUESTED': {
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isLoaded: false,
    //     isLoadError: false
    //   }
    // }
    default:
      return state;
  }
}
