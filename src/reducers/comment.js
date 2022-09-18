import {
	GET_COMMENTS,
	CREATE_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
	SELECT_COMMENT
} from "../actions/types";

const initialState = {
	comments : [],
	selectedCommentId : null
};

const commentReducerFn = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_COMMENTS:
			return {...state ,  comments: payload}
		case SELECT_COMMENT:
			return {...state, selectedCommentId : payload }
		case CREATE_COMMENT:
			return {...state , comments : [payload, ...state.comments]};
		case UPDATE_COMMENT:
			return state.map((comment) => {
				if (comment.id === payload.id) {
					return {
						...comment,
						payload,
					};
				}
				return comment;
			});
		case DELETE_COMMENT:
			const comments = state.comments.filter(({id})=> {
				return id !== payload.commentId
			})
			return {...state, comments}
		default:
			return state;
	}
};

export default commentReducerFn;
