import { combineReducers } from "redux";
import { reducer as appReducer } from "./app_reducer";

export default combineReducers({
    app: appReducer
});
