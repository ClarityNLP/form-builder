import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { formReducer } from './form_reducer'
import { evidenceByGroupReducer } from './evidence_by_group_reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  evidenceByGroup: evidenceByGroupReducer
})
