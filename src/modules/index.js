import { combineReducers } from "redux";
import commentReducer from "./comment";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  comment: commentReducer,
});

const composeEnhancer = composeWithDevTools;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(ReduxThunk, logger))
);

export default store;
