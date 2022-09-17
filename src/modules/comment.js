import commentApi from "../api";

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

const initialStore = {
  data: [],
  loading: false,
  error: null,
};

export const getComments = () => async (dispatch) => {
  dispatch({ type: GET_COMMENTS }); // 요청이 시작됨  (로딩 시작);
  try {
    const { data } = await commentApi.get();
    dispatch({ type: GET_COMMENTS_SUCCESS, comments: data }); // 성공
  } catch (e) {
    dispatch({ type: GET_COMMENTS_ERROR, error: e }); // 실패
  }
};

export const postComment =
  ({ profile_url, author, content, createdAt }) =>
  async (dispatch) => {
    dispatch({ type: POST_COMMENT });
    try {
      const { data } = await commentApi.post({
        profile_url,
        author,
        content,
        createdAt,
      });
      dispatch({ type: POST_COMMENT_SUCCESS, comment: data });
    } catch (e) {
      dispatch({ type: POST_COMMENT_ERROR, error: e });
    }
  };

export const deleteComment = (id) => async (dispatch) => {
  dispatch({ type: DELETE_COMMENT });
  try {
    await commentApi.delte(id);
    dispatch({ type: DELETE_COMMENT_SUCCESS, id });
  } catch (e) {
    dispatch({ type: DELETE_COMMENT_ERROR, error: e });
  }
};

export const putComment =
  ({ id, profile_url, author, content, createdAt }) =>
  async (dispatch) => {
    dispatch({ type: PUT_COMMENT });
    try {
      await commentApi.put({
        id,
        profile_url,
        author,
        content,
        createdAt,
      });
      dispatch({
        type: PUT_COMMENT_SUCCESS,
        fixComment: { id, info: { profile_url, author, content, createdAt } },
      });
    } catch (e) {
      dispatch({ type: POST_COMMENT_ERROR, error: e });
    }
  };

const commentReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.comments,
      };
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case POST_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.comment],
      };
    case POST_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DELETE_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((comment) =>
          comment.id !== action.id ? comment : action.info
        ),
      };
    case DELETE_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case PUT_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case PUT_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((comment) =>
          comment.id !== action.fixComment.id ? comment : action.fixComment.info
        ),
      };
    case PUT_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default commentReducer;
