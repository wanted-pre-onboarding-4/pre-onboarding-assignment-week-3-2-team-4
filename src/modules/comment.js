import { reducerUtils } from "../util/async.utill";
import { commentApi } from "../services/api";

const GET_COMMENTS = "comment/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comment/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "comment/GET_COMMENTS_ERROR";

const POST_COMMENT = "comment/POST_COMMENT";
const POST_COMMENT_SUCCESS = "comment/POST_COMMENT_SUCCESS";
const POST_COMMENT_ERROR = "comment/POST_COMMENT_ERROR";

const PUT_COMMENT = "comment/PUT_COMMENT";
const PUT_COMMENT_SUCCESS = "comment/PUT_COMMENT_SUCCESS";
const PUT_COMMENT_ERROR = "comment/PUT_COMMENT_ERROR";

const DELETE_COMMENT = "comment/DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "comment/DELETE_COMMENT_ERROR";

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  try {
    const { data } = await commentApi.getList();
    dispatch({ type: GET_COMMENTS_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: GET_COMMENTS_ERROR, error: e });
  }
};

export const deleteComment = (comment_id) => async (dispatch) => {
  dispatch({ type: DELETE_COMMENT });
  try {
    const { data } = await commentApi.deleteComment(comment_id);
    dispatch({ type: DELETE_COMMENT_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: DELETE_COMMENT_ERROR, error: e });
  }
};

export const postComment = (config) => async (dispatch) => {
  dispatch({ type: POST_COMMENT });
  try {
    const { data } = await commentApi.postComment(config);
    dispatch({ type: POST_COMMENT_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: POST_COMMENT_ERROR, error: e });
  }
};

export const putComment = (comment_id, config) => async (dispatch) => {
  dispatch({ type: PUT_COMMENT });
  try {
    const { data } = await commentApi.putComment(comment_id, config);
    dispatch({ type: PUT_COMMENT_SUCCESS, data: data });
  } catch (e) {
    dispatch({ type: PUT_COMMENT_ERROR, error: e });
  }
};

const commentReducer = (state = reducerUtils.initialStore, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...reducerUtils.loading(),
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...reducerUtils.success(action.data),
      };
    case GET_COMMENTS_ERROR:
      return {
        ...reducerUtils.error(action.error),
      };

    case DELETE_COMMENT:
      return {
        ...reducerUtils.loading([...state.data]),
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success(null),
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...reducerUtils.error(action.error),
      };

    case POST_COMMENT:
      return {
        ...reducerUtils.loading([...state.data]),
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success([...state.data, action.data]),
      };
    case POST_COMMENT_ERROR:
      return {
        ...reducerUtils.error(action.error),
      };

    case PUT_COMMENT:
      return {
        ...reducerUtils.loading([...state.data]),
      };
    case PUT_COMMENT_SUCCESS:
      const originState = [...state.data];
      const newState = originState.map((comment) =>
        comment.id === action.data.id ? action.data : comment
      );
      return {
        ...reducerUtils.success([...newState]),
      };
    case PUT_COMMENT_ERROR:
      return {
        ...reducerUtils.error(action.error),
      };

    default:
      return state;
  }
};

export default commentReducer;
