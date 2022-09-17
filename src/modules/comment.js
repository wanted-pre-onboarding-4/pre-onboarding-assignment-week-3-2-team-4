import { reducerUtils } from "../util/async.utill";
import { commentApi } from "../services/api";

const GET_COMMENTS = "comment/GET_COMMENT_LIST";
const GET_COMMENTS_SUCCESS = "comment/GET_COMMENT_LIST_SUCCESS";
const GET_COMMENTS_ERROR = "comment/GET_COMMENT_LIST_ERROR";

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
    await commentApi.deleteComment(comment_id);
    dispatch({ type: DELETE_COMMENT_SUCCESS });
  } catch (e) {
    dispatch({ type: DELETE_COMMENT_ERROR, error: e });
  }
};

export const postComment = (config) => async (dispatch) => {
  dispatch({ type: POST_COMMENT });
  try {
    await commentApi.postComment(config);
    dispatch({ type: POST_COMMENT_SUCCESS });
  } catch (e) {
    dispatch({ type: POST_COMMENT_ERROR, error: e });
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
        ...reducerUtils.success(action),
      };
    case GET_COMMENTS_ERROR:
      return {
        ...reducerUtils.error(action),
      };

    case DELETE_COMMENT:
      return {
        ...reducerUtils.loading(),
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success(null),
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...reducerUtils.error(action),
      };

    case POST_COMMENT:
      return {
        ...reducerUtils.loading(),
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...reducerUtils.success(null),
      };
    case POST_COMMENT_ERROR:
      return {
        ...reducerUtils.error(action),
      };

    default:
      return state;
  }
};

export default commentReducer;
