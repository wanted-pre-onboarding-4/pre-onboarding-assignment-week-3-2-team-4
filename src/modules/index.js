import { combineReducers } from "redux";
import commentReducer from "./comment";
import targetToEditReducer from "./targetToEdit";

const rootReducer = combineReducers({
  comment: commentReducer,
  targetToEdit: targetToEditReducer,
});

export default rootReducer;
