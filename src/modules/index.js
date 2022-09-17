import { combineReducers } from "redux";
import commentReducer from "./comment";

const rootReducer = combineReducers({
  comment: commentReducer,
});

export default rootReducer;
