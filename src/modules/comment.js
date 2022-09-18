import commentApi from "../api";
import {
  reducerUtils,
  createPromiseThunk,
  handleAsyncAction,
} from "../util/async.utill";

const GET_COMMENTS = "comment/GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "comment/GET_COMMENTS_ERROR";

const POST_COMMENT = "comment/POST_COMMENT";
export const POST_COMMENT_SUCCESS = "comment/POST_COMMENT_SUCCESS";
const POST_COMMENT_ERROR = "comment/POST_COMMENT_ERROR";

const PUT_COMMENT = "comment/PUT_COMMENT";
export const PUT_COMMENT_SUCCESS = "comment/PUT_COMMENT_SUCCESS";
const PUT_COMMENT_ERROR = "comment/PUT_COMMENT_ERROR";

export const DELETE_COMMENT = "comment/DELETE_COMMENT";
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "comment/DELETE_COMMENT_ERROR";

const PAGE_CLICK = "comment/PAGE_CLICK";

const initialState = {
  ...reducerUtils.initial(),
};

export const pageClick = (page) => ({ type: PAGE_CLICK, page });

export const getComments = createPromiseThunk(GET_COMMENTS, commentApi.get);
export const postComment = createPromiseThunk(POST_COMMENT, commentApi.post);
export const deleteComment = createPromiseThunk(
  DELETE_COMMENT,
  commentApi.delete
);
export const putComment = createPromiseThunk(PUT_COMMENT, commentApi.put);

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return handleAsyncAction(GET_COMMENTS)(state, action);
    case POST_COMMENT:
    case POST_COMMENT_SUCCESS:
    case POST_COMMENT_ERROR:
      return handleAsyncAction(POST_COMMENT)(state, action);

    case DELETE_COMMENT:
    case DELETE_COMMENT_SUCCESS:
    case DELETE_COMMENT_ERROR:
      return handleAsyncAction(DELETE_COMMENT)(state, action);
    case PUT_COMMENT:
    case PUT_COMMENT_SUCCESS:
    case PUT_COMMENT_ERROR:
      return handleAsyncAction(PUT_COMMENT)(state, action);
    case PAGE_CLICK:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default commentReducer;
