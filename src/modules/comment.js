import { commentApi } from "../lib/api";

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
    const { data } = await commentApi.getAllComments();

    dispatch({ type: GET_COMMENTS_SUCCESS, comments: data }); // 성공
  } catch (e) {
    dispatch({ type: GET_COMMENTS_ERROR, error: e }); // 실패
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
    default:
      return state;
  }
};

export default commentReducer;
