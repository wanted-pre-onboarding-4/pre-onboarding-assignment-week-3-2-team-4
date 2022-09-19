import {
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  GET_COMMENTS_SUCCESS,
  POST_COMMENT_SUCCESS,
  PUT_COMMENT_SUCCESS,
} from "../modules/comment";

export const reducerUtils = {
  initial: (data = []) => ({
    loading: false,
    data,
    error: null,
    page: 1,
    numberPerPage: 4,
  }),
  loading: () => ({
    loading: true,
  }),
  success: (data) => ({
    data,
    loading: false,
  }),
  error: (error) => ({
    loading: false,
    error,
  }),
};

// Promise에 기반한 Thunk 함수를 만들어주는 함수
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type });
    try {
      const { data: payload } = await promiseCreator(param);
      type === DELETE_COMMENT
        ? dispatch({ type: SUCCESS, payload: param })
        : dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };
};

const eachTypeSuccess = (type, payload, prevState) => {
  let successType = `${type}_SUCCESS`;
  switch (successType) {
    case GET_COMMENTS_SUCCESS:
      return reducerUtils.success(payload);
    case POST_COMMENT_SUCCESS:
      return reducerUtils.success([...prevState.data, payload]);
    case DELETE_COMMENT_SUCCESS:
      return reducerUtils.success(
        prevState.data.filter((comment) => comment.id !== payload)
      );
    case PUT_COMMENT_SUCCESS:
      return reducerUtils.success(
        prevState.data.map((comment) =>
          comment.id !== payload.id ? comment : payload
        )
      );
    default:
      return prevState;
  }
};

// 비동기 통신 전용  reducer
export const handleAsyncAction = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          ...reducerUtils.loading(),
        };
      case SUCCESS:
        return { ...state, ...eachTypeSuccess(type, action.payload, state) };
      case ERROR:
        return {
          ...state,
          ...reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};
