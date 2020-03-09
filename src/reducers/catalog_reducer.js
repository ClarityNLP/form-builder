const initialState = {
  isLoading: true,
  isLoaded: false,
  isLoadError: false,
  isVisible: true,
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
      // let fakeCatalogData = []
      //
      // let i = 0;
      //
      // while (i < 11) {
      //   fakeCatalogData.push({
      //     url: "#",
      //     slug: "#",
      //     name: "Lorem ipsum",
      //     owner: "gatech",
      //     version: "0.1.3"
      //   });
      //   i++;
      // }

      return {
        ...state,
        forms: action.data,
        // forms: [...action.data, ...fakeCatalogData],
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
    case 'OPEN_CATALOG': {
      return {
        ...state,
        isVisible: true
      }
    }
    case 'CLOSE_CATALOG': {
      return {
        ...state,
        isVisible: false
      }
    }
    default:
      return state;
  }
}
