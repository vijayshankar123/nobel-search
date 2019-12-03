import { combineReducers } from "redux";
import nobelReducer from "./nobelReducer";

export default combineReducers({
  nobel: nobelReducer
});
