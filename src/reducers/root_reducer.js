import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { formReducer } from './form_reducer'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
})
