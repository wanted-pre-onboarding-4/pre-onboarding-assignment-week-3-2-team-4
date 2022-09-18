export default function createRequestThunk(type, request) {
  return (params, ...rest) =>
    async (dispatch) => {
      dispatch({ type: "API_REQUEST_TRIGGER" });
      try {
        if (rest.length > 0) {
          const { data } = await request(params, rest[0]);
          dispatch({ type, payload: data });
        } else {
          const { data } = await request(params);
          dispatch({ type, payload: data });
        }
      } catch (e) {
        dispatch({ type: "API_REQUEST_ERROR", error: e });
        throw e;
      }
    };
}
