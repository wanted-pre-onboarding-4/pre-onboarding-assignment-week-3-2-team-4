import { combineReducers } from "redux";
import commentReducer from "./comment";
import editReducer from "./editList";

const rootReducer = combineReducers({
  comment: commentReducer,
  editList: editReducer,
});

export default rootReducer;
