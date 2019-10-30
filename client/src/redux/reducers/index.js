import { combineReducers } from 'redux';
import { reducer as appReducer } from './app_reducer';
import { connectRouter } from 'connected-react-router';

export default history =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history)
  });
