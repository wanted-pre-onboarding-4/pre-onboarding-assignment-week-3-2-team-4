import { commentApi } from "../lib/api";
import createRequestThunk from "../util/createRequsetThunk";

const API_REQUEST_TRIGGER = "comment/API_REQUEST_TRIGGER";
const API_REQUEST_ERROR = "comment/API_REQUEST_ERROR";

const GET_COMMENT = "comment/GET_COMMENT_LIST_SUCCESS";
const GET_EDITING_COMMENT = "comment/GET_EDITING_COMMENT_SUCCESS";
const POST_COMMENT = "comment/POST_COMMENT_SUCCESS";
const UPDATE_COMMENT = "comment/UPDATE_COMMENT_SUCCESS";
const DELETE_COMMENT = "comment/DELETE_COMMENT_SUCCESS";

const initialStore = {
  data: [],
  editingComment: {},
  loading: false,
  error: null,
};

export const getEditingComment = (formData) => async (dispatch) => {
  dispatch({ type: API_REQUEST_TRIGGER });
  try {
    dispatch({ type: GET_EDITING_COMMENT, payload: formData });
  } catch (e) {
    dispatch({ type: API_REQUEST_ERROR, error: e });
  }
};

export const getComments = createRequestThunk(
  GET_COMMENT,
  commentApi.getAllComments
);

export const postComment = createRequestThunk(
  POST_COMMENT,
  commentApi.postComment
);

export const deleteComment = createRequestThunk(
  DELETE_COMMENT,
  commentApi.deleteComment
);

export const updateComment = createRequestThunk(
  UPDATE_COMMENT,
  commentApi.updateComment
);

const commentReducer = (state = initialStore, action) => {
  switch (action.type) {
    case API_REQUEST_TRIGGER:
      return {
        ...state,
        loading: true,
      };
    case API_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_COMMENT:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_COMMENT:
      const comments = [...state.data].map((comment) =>
        comment.id !== action.payload.id ? comment : action.payload
      );

      return {
        ...state,
        data: [...comments],
        loading: false,
        editingComment: {},
      };
    case GET_EDITING_COMMENT:
      return {
        ...state,
        loading: false,
        editingComment: Object.assign({}, action.payload),
      };
    default:
      return state;
  }
};

export default commentReducer;
