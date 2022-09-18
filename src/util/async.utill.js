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
      switch (type) {
        case "GET":
          dispatch({ type: SUCCESS, payload });
          break;
        case "POST":
          dispatch({
            type: SUCCESS,
            payload: {
              profile_url: payload.profile_url,
              author: payload.author,
              content: payload.content,
              createdAt: payload.createdAt,
            },
          });
          break;
        case "DELETE":
          dispatch({ type: SUCCESS, payload: param });
          break;
        case "PUT":
          dispatch({ type: SUCCESS, payload });
          break;
        default:
          break;
      }
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  };
};

const eachTypeSuccess = (type, payload, prevState) => {
  let result;
  switch (type) {
    case "GET":
      result = reducerUtils.success(payload);
      break;
    case "POST":
      result = reducerUtils.success([...prevState.data, payload]);
      break;
    case "DELETE":
      result = reducerUtils.success(
        prevState.data.filter((comment) => comment.id !== payload)
      );
      break;
    case "PUT":
      result = reducerUtils.success(
        prevState.data.map((comment) =>
          comment.id !== payload.id
            ? comment
            : {
                profile_url: payload.profile_url,
                author: payload.author,
                content: payload.content,
                createdAt: payload.createdAt,
              }
        )
      );
    default:
      break;
  }

  return result;
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
        return eachTypeSuccess(type, action.payload, state);
      case ERROR:
        return {
          ...state,
          ...reducerUtils.error(action.payload),
        };
    }
  };
};
