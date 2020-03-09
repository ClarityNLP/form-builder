const initialState = {};

export function groupLookupReducer(state = initialState, action = {}) {
  switch(action.type) {
    case 'GET_ACTIVITY_FULFILLED': {
      //TODO use the groupLookup already present in activity object.
      const groupLookup = action.activity.groups.allIds.reduce((acc, g) => {
        return {
          ...acc,
          ...action.activity.groups.byId[g].questions.allIds.reduce((acc, q) => {
            return {
              ...acc,
              [q]: g
            }
          }, {})
        }
      }, {});
      return {
        ...state,
        ...groupLookup
      }
    }
    default:
      return state;
  }
}
