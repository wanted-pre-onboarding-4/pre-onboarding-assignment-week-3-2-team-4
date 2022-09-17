import { reducerUtils } from "../util/async.utill";
import { commentApi } from "../services/api";

const GET_COMMENTS = "comment/GET_COMMENTS";
const COMMENT_LOADING = "comment/COMMENT_LOADING";
const COMMENT_ERROR = "comment/COMMENT_ERROR";

const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
const POST_COMMENT_SUCCESS = "comment/POST_COMMENT_SUCCESS";
const PUT_COMMENT_SUCCESS = "comment/PUT_COMMENT_SUCCESS";
const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const { data } = await commentApi.getList();
    dispatch({ type: GET_COMMENTS_SUCCESS, data });
  } catch (e) {
    dispatch({ type: COMMENT_ERROR, error: e });
  }
};

export const postComment = (config) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { data } = await commentApi.postComment(config);
    dispatch({ type: POST_COMMENT_SUCCESS, data });
  } catch (e) {
    dispatch({ type: COMMENT_ERROR, error: e });
  }
};

export const putComment = (comment_id, config) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { data } = await commentApi.putComment(comment_id, config);
    dispatch({ type: PUT_COMMENT_SUCCESS, data });
  } catch (e) {
    dispatch({ type: COMMENT_ERROR, error: e });
  }
};

export const deleteComment = (comment_id) => async (dispatch) => {
  dispatch({ type: COMMENT_LOADING });
  try {
    const { data } = await commentApi.deleteComment(comment_id);
    dispatch({ type: DELETE_COMMENT_SUCCESS, data });
  } catch (e) {
    dispatch({ type: COMMENT_ERROR, error: e });
  }
};

const commentReducer = (state = reducerUtils.initialStore, action) => {
  switch (action.type) {
    case COMMENT_LOADING:
      return {
        ...reducerUtils.loading([...state.data]),
      };

    case GET_COMMENTS:
      return {
        ...reducerUtils.loading(),
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...reducerUtils.success(action.data),
      };

    case POST_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success([...state.data, action.data]),
      };

    case PUT_COMMENT_SUCCESS:
      const originState = [...state.data];
      const newState = originState.map((comment) =>
        comment.id === action.data.id ? action.data : comment
      );
      return {
        ...reducerUtils.success([...newState]),
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success(null),
      };

    default:
      return state;
  }
};

export default commentReducer;
