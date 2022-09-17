import {
	GET_COMMENTS,
	CREATE_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
} from "../actions/types";

const initialState = [];

const commentReducerFn = (comments = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_COMMENTS:
			return payload;
		case CREATE_COMMENT:
			return [payload, ...comments];
		case UPDATE_COMMENT:
			return comments.map((comment) => {
				if (comment.id === payload.id) {
					return {
						...comment,
						payload,
					};
				}
				return comment;
			});
		case DELETE_COMMENT:
			return comments.filter(({ id }) => id !== payload.id);
		default:
			return comments;
	}
};

export default commentReducerFn;
